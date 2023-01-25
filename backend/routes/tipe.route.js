const Router = require('express').Router()
const AuthGuard = require('@middlewares/auth-guard')
const LogRequest = require('@middlewares/log-request')

const { findAll, findById, create, update, remove } = require('@controllers/tipe.controller')
const { UpdateTipeSchema, CreateTipeSchema } = require('@validations/tipe.schema')

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/images/tipe')
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

const { LoggerMiddleware } = new LogRequest('TIPE_ROUTE')

Router
    .use(LoggerMiddleware, AuthGuard)
    .post('/', upload.single('image'), CreateTipeSchema, create)
    .patch('/:id', UpdateTipeSchema, update)
    .get('/', findAll)
    .get('/:id', findById)
    .delete('/:id', remove)

module.exports = { Router, route: '/tipe' }