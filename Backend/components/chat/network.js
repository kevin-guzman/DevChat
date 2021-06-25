const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
const AuthMiddleware = require('../../middlewares/Authentication')

// router.use('*', AuthMiddleware('customer:read'))
// router.use('/',AuthMiddleware('customer:read'))
router.post('/', AuthMiddleware('customer:read'),(req, res)=>{
    // const _users = [req.id, ...req.body.users]
    const chatData = {name:req.body.name,description:req.body.description, date: req.body.date}
    controller.addChat(chatData,req.id)
    .then(resp => response.success(req, res, resp, 201))
    .catch(err => response.error(req, res, err, 500, err))
})

router.get('/', AuthMiddleware('customer:read'),(req, res)=>{
    controller.getChats(req.id)
    .then(resp => {response.success(req, res, resp, 200)})
    .catch(err => response.error(req, res, 'internal error', 500, err))
})

router.get('/all', (req, res)=>{
    controller.getChats(false)
    .then(resp => {response.success(req, res, resp, 200)})
    .catch(err => response.error(req, res, 'internal error', 500, err))
})

module.exports = router;