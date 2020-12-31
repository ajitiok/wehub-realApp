const router = require('express').Router()
const PhotoController = require('../controllers/photoController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', PhotoController.findAll)
router.post('/', authorization, PhotoController.create)
router.put('/:id', authorization, PhotoController.update)


module.exports = router