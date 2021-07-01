const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
const multer = require('multer')
const AuthMiddleware = require('../../middlewares/Authentication')
const upload = multer({dest:'public/files/'})

router.use('*', AuthMiddleware('customer:read'))

router.get('/', (req, res)=>{
    const filters = {chat: req.query.chat} || {}
    controller.getMessages(filters)
    .then(resp => response.success(req, res,resp))
    .catch(err => response.error(req, res, 'Hubo un error al obtener los mensajes', 500, err))
})

router.post('/', upload.single('file'), (req, res)=>{
    controller.addMessage(req.body.chat, req.id, req.body.message, req.file)
    .then(resp => {response.success(req, res,resp)})
    .catch(err => {response.error(req, res, 'Hubo un error al enviar el mensaje', 503, err)})
})

router.patch('/:id', (req, res)=>{
    controller.updateMessage(req.params.id, req.body.message)
    .then(resp => {response.success(req, res,resp)})
    .catch(err => {response.error(req, res, 'Hubo un error al editar el mensaje', 503, err)})
})

router.delete('/:id', (req, res)=>{
    controller.deleteMessage(req.params.id)
    .then(resp => {response.success(req, res,`Mensaje id:${req.params.id} eliminado`)})
    .catch(err => {response.error(req, res, 'Hubo un error al editar el mensaje', 503, err)})
})

module.exports = router;