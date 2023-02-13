const { user} = require('@models')
const { NotFound, Forbidden } = require('http-errors')
const { Op } = require('sequelize')
const { hashPass } = require('@utils/hashPass')
const path = require ('path')
const AWS = require("aws-sdk");
const {AWS_BUCKET_NAME, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION }= process.env

AWS.config.update({
    region: AWS_REGION,
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
});
const s3 = new AWS.S3()

async function findAll(req, res, next) {
    if (req.user.abilities.cannot('read', user)) {
        return next(Forbidden())
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 15

    const options = {
        offset: (page - 1) * limit,
        limit,
        order: [
            ['createdAt', 'ASC']
        ],
        where: {}
    }

    const { role, username, name } = req.query
   
    if (name) {
        options.where['role'] = role
    }
    if (username) {
        options.where['username'] = { [Op.like]: `%${username}%` }
    }
    if (name) {
        options.where['name'] = { [Op.like]: `%${name}%` }
    }

    const result = await user.findAndCountAll({options});
    const totalPage = Math.ceil(result.count / limit)

    res.json({ currentPage: page, totalPage, rowLimit: limit, ...result })
}

async function findById(req, res, next) {
    if (req.user.abilities.cannot('read', user)) {
        return next(Forbidden())
    }
    // const relations = []
    // if (req.query.getTransaksi === 'true') {
    //     relations.push('transaksi')
    // }
    const result = await user.findByPk(req.params.id)
    result
        ? res.send(result)
        : next(NotFound())
}

async function create(req, res, next) {
    if (req.user.abilities.cannot('create', user)) {
        return next(Forbidden())
    }

    const { body } = req
    body.password = await hashPass(body.password)
    body.image = "img-" + Date.now() + path.extname(req.file?.originalname)
    const username = body.username
    const already =await user.findOne({where: {username}})
    if(!body.image){
        if(already){
            return res.send({message: "Username already to use"})
        }
        else{
            body.image = "no_profile.webp"
            const result = await user.create(body)
            res.send(result)
        }
    }
    else{
        if (already) {
            return res.send({message: "Username already to use"})
        }
        else{
            const buf = req.file.buffer
            const params = {
                Bucket: AWS_BUCKET_NAME,
                Key : `user/${body.image}`,
                Body: buf
            }
            s3.upload(params).promise()
            const result = await user.create(body)
            res.send(result)
        }
    }
   
    
    
} 

async function update(req, res, next) {
    if (req.user.abilities.cannot('update', user)) {
        return next(Forbidden())
    }

    const { id } = req.params
    const { body } = req
    
    const username = req.body.username
    const already =await user.findOne({where:{[Op.and]: [{username:{[Op.like]:username}},{id:{[Op.ne]:id}}]} })
    body.image = req.file?.filename

    if(!body.image) {
        if (already){
            return res.json({message: "Username already to use"})
        }
        else {
            const data = await user.findOne({where : {id}})
            body.password = (data.password)
            body.image = (data.image)
            const result = await user.update(body, {where:{id}})
            result[0]
                ?res.json({message: "successfully updated"})
                : next(NotFound())
        }
    }
    else{
        if (already){
            return res.json({message: "Username already to use"})
        }
        else{
            const data = await user.findOne({where : {id}})
            body.password = (data.password)
            const result = await user.update(body, { where: { id } })
            result[0]
                ? res.json({ message: 'Successfully updated',  })
                : next(NotFound())
        }
    }

       
}

async function changePass(req, res, next) {
    const { abilities } = req.user
    let user = await user.findByPk(req.params.id)
    if (!user) {
        return next(NotFound())
    } else if (abilities.cannot('update', user)) {
        return next(Forbidden())
    }

    const password = await hashPass(req.body.password)
    await user.update({ password })
    return res.send({
        message: "Successfully changed user's password"
    })
}


async function remove(req, res, next) {
    if (req.user.abilities.cannot('delete', user)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const result = await user.destroy({ where: { id } })
    result === 1
        ? res.json({ message: 'Successfully deleted' })
        : next(NotFound())
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove,
    changePass
}