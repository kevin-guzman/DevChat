const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
const AuthMiddleware = require('../../middlewares/Authentication')

// router.use('*', AuthMiddleware('customer:read'))
router.post('/', AuthMiddleware('customer:read'), (req, res)=>{
    const _users = [req.id, ...req.body.users]
    controller.addChat(_users)
    .then(resp => response.success(req, res, resp.id, 201))
    .catch(err => response.error(req, res, 'internal error', 500, err))
})

router.get('/', AuthMiddleware('customer:read'), (req, res)=>{
    controller.getChats(req.id)
    .then(resp => {response.success(req, res, resp, 200)})
    .catch(err => response.error(req, res, 'internal error', 500, err))
})

module.exports = router;