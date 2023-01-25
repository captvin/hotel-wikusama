const Router = require('express').Router()
const AuthGuard = require('@middlewares/auth-guard')
const LogRequest = require('@middlewares/log-request')
const { findAll, findById, create, update, remove } = require('@controllers/transaksi.controller')
const { UpdateTransaksiSchema, CreateTransaksiSchema } = require('@validations/transaksi.schema')

const { LoggerMiddleware } = new LogRequest('TRANSAKSI_ROUTE')

Router
    .use(LoggerMiddleware, AuthGuard)
    .get('/', findAll)
    .get('/:id', findById)
    .post('/', CreateTransaksiSchema, create)
    .patch('/:id', UpdateTransaksiSchema, update)
    .delete('/:id', remove)

module.exports = { Router, route: '/transaksi' }