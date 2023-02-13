const { tipe } = require('@models')
const { NotFound, Forbidden } = require('http-errors')
const { Op} = require('sequelize')
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
    if (req.user.abilities.cannot('read', tipe)) {
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

    const { nama_tipe } = req.query

    if (nama_tipe) {
        options.where['nama_tipe'] = {
            [Op.like]: `%${nama_tipe}%`
        }
    }

    const result = await tipe.findAndCountAll(options)
    const totalPage = Math.ceil(result.count / limit)

    res.json({ currentPage: page, totalPage, rowLimit: limit, ...result })
}

async function findById(req, res, next) {
    if (req.user.abilities.cannot('read', tipe)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const relations = []
    if (req.query.getTipe === 'true') {
        relations.push('kamar')
    }
    const result = await tipe.findByPk(id, {include: relations})
    result
        ? res.json(result)
        : next(NotFound())
}

async function create(req, res, next) {
    if (req.user.abilities.cannot('create', tipe)) {
        return next(Forbidden())
    }
    const { body } = req
    body.image = "img-"+ Date.now() + path.extname(req.file?.originalname)
    const nama_tipe = body.nama_tipe
    const already = await tipe.findOne({where: {nama_tipe}})
    if (!body.image){

        if (already) {
            return res.send({message: "Tipe already exists"})
        }
        else{
            body.image = "no_image.jpg"
            const result = await tipe.create(body)
            res.send(result)
        }
    }
       
    else {
        if (already) {
            return res.send({message: "Tipe already exists"})
        }
        else{
            const buf = req.file.buffer
            const params = {
                Bucket: AWS_BUCKET_NAME,
                Key : `tipe/${body.image}`,
                Body: buf
            }
            s3.upload(params).promise()
            const result = await tipe.create(body)
            res.send(result)
        }
    }
    
    
    
    
} 

async function update(req, res, next) {
    if (req.user.abilities.cannot('update', tipe)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const { body } = req
   
    const nama_tipe = req.body.nama_tipe
    const already = await tipe.findOne({where:{[Op.and]: [{nama_tipe:{[Op.like]:nama_tipe}},{id:{[Op.ne]:id}}]} })
    body.image = req.file?.filename

    if (!body.image){
        if (already){
            return res.json({message: "Tipe already exists"})
        }
        else {
            
            const data = await tipe.findOne({where : {id}})
            body.image = (data.image)
            const result = await tipe.update(body, {where : {id}})
            result[0]
                ? res.json({message: 'successfully updated'})
                : next(NotFound())
        }
    }
    else {
        if (already) {
            return res.send({message: "Tipe already exists"})
        }
        else{
            const result = await tipe.update(body, { where: { id } })
            result[0]
                ? res.json({ message: 'Successfully updated',  })
                : next(NotFound())
        }
    }
    
    
}

async function remove(req, res, next) {
    if (req.user.abilities.cannot('delete', tipe)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const result = await tipe.destroy({ where: { id } })
    result === 1
        ? res.json({ message: 'Successfully deleted' })
        : next(NotFound())
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}