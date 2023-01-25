const Router = require('express').Router()
const AuthGuard = require('@middlewares/auth-guard')
const LogRequest = require('@middlewares/log-request')

const { findAll, findById, create, update, remove, changePass } = require('@controllers/user.controller')
const { UpdateUserSchema, CreateUserSchema, ChangePassSchema  } = require('@validations/user.schema')

const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./public/images/user')
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

const { LoggerMiddleware } = new LogRequest('USER_ROUTE')

Router
    .use(LoggerMiddleware, AuthGuard)
    .get('/', findAll)
    .get('/:id', findById)
    .post('/', upload.single('image'), CreateUserSchema,create )
    .patch('/:id', UpdateUserSchema, update)
    .patch('/change-pass/:id', ChangePassSchema, changePass)
    .delete('/:id', remove)

module.exports = { Router, route: '/user' }

