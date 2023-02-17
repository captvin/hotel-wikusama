const { kamar, detail, pemesanan, tipe } = require('@models')
const { NotFound, Forbidden } = require('http-errors')
const { Op } =require('sequelize')

async function findAll(req, res, next) {
    if (req.user.abilities.cannot('read', (kamar, detail, pemesanan, tipe))) {
        return next(Forbidden())
    }
    const { body } = req
    const result = await tipe.findAll({
        include: [
            {
                model: kamar,
                as: "kamar",
                attributes: ["id"],
                required: false,
                where: {
                    id_tipe: body.id_tipe,
                },
                include: [
                    {
                        model: detail,
                        as: "detail",
                        attributes: ["tgl_akses"],
                        required: false,
                        where: {
                            tgl_akses: {
                                [Op.and]: {
                                    [Op.between]: [body.tgl_in, body.tgl_out],
                                }
                            },
                        },
                    },
                ],
            },
        ],
        where: {
            "$kamar.id_tipe$": req.body.id,
            "$kamar->detail.tgl_akses$": {
                [Op.is]: null
            },
        },
    })

    res.json(result)
}

async function findById(req, res, next) {
    if (req.user.abilities.cannot('read', kamar)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const relations = []
    if (req.query.getKamar === 'true') {
        relations.push('transaksi')
    }
    const result = await kamar.findByPk(id, {include: "tipe"})
    result
        ? res.json(result)
        : next(NotFound())
}

async function create(req, res, next) {
    if (req.user.abilities.cannot('create', kamar)) {
        return next(Forbidden())
    }
    const { body } = req
    const nomor = body.nomor
    const already = await kamar.findOne({where: {nomor}})

    if(already){
        return res.send({message: "Nomor kamar already exists"})
    }
    else{
        const result = await kamar.create(body)
        res.json(result)
    }
}

async function update(req, res, next) {
    if (req.user.abilities.cannot('update', kamar)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const { body } = req
    nomor = body.nomor
    const already = await kamar.findOne({where:{[Op.and]: [{nomor:{[Op.like]:nomor}},{id:{[Op.ne]:id}}]} })

    if(already){
        return res.send({message: "Nomor kamar already exists"})
    }
    else{
        const result = await kamar.update(body, {where: {id}})
        result[0]
            ? res.json({message: "Successfully updated"})
            : next(NotFound())
    }
}

async function remove(req, res, next) {
    if (req.user.abilities.cannot('delete', kamar)) {
        return next(Forbidden())
    }
    const { id } = req.params
    const result = await kamar.destroy({ where: { id } })
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