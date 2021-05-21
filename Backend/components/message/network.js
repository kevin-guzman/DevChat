const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
const multer = require('multer')
const AuthMiddleware = require('../../middlewares/Authentication')
const upload = multer({dest:'public/files/'})

router.get('/', AuthMiddleware('customer:read'), (req, res)=>{
    const filters = {chat: req.query.chat} || {}
    controller.getMessages(filters)
    .then(resp => response.success(req, res,resp))
    .catch(err => response.error(req, res, 'Hubo un error al obtener los mensajes', 500, err))
})

router.post('/', AuthMiddleware('customer:read'), upload.single('file'), (req, res)=>{
    controller.addMessage(req.body.chat, req.id, req.body.message, req.file)
    .then(resp => {response.success(req, res,resp)})
    .catch(err => {response.error(req, res, 'Hubo un error al enviar el mensaje', 503, err)})
})

router.patch('/:id', AuthMiddleware('customer:read') ,(req, res)=>{
    controller.updateMessage(req.params.id, req.body.message)
    .then(resp => {response.success(req, res,resp)})
    .catch(err => {response.error(req, res, 'Hubo un error al editar el mensaje', 503, err)})
})

router.delete('/:id', AuthMiddleware('customer:read'), (req, res)=>{
    controller.deleteMessage(req.params.id)
    .then(resp => {response.success(req, res,`Mensaje id:${req.params.id} eliminado`)})
    .catch(err => {response.error(req, res, 'Hubo un error al editar el mensaje', 503, err)})
})

module.exports = router;
