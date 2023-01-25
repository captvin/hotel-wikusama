const { tipe } = require('@models')
const { NotFound, Forbidden } = require('http-errors')
const { Op} = require('sequelize')

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
    // const getDetail = req.query
    // const option = {
    //     include: []
    // }
    // if (getDetail == 'true') option.include.push('detail')
    const result = await tipe.findByPk(id, option)
    result
        ? res.json(result)
        : next(NotFound())
}

async function create(req, res, next) {
    if (req.user.abilities.cannot('create', tipe)) {
        return next(Forbidden())
    }
    const { body } = req
    body.image = req.file.filename
    const nama_tipe = req.body.nama_tipe
    const already =await tipe.findOne({where: {nama_tipe}})
    if (already) {
        return res.send({message: "Tipe already exists"})
    }
    else{
        const result = await tipe.create(body)
        res.send(result)
    }
    
    
} 

async function update(req, res, next) {
    if (req.user.abilities.cannot('update', tipe)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const { body } = req
    const tipe1 = req.body.nama_tipe
    const already =await tipe.findOne({where:{[Op.and]: [{nama_tipe:{[Op.like]:tipe1}},{id:{[Op.ne]:id}}]} })
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