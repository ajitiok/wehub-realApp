const router = require("express").Router()
const UserController = require('../controllers/userController')
const photoRouter = require('./photoRouter')
const HomeController = require('../controllers/homeController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/home',HomeController.findAll )

router.use('/photo', photoRouter)

module.exports = router