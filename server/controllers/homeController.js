const { Photo } = require('../models')

class HomeController {

    static findAll(req, res , next ){
        Photo.findAll()
            .then(photo => {
                res.status(200).json(photo)
            })
            .catch(err => {
                next(err)
            })
    }


}

module.exports = HomeController