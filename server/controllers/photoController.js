const { Photo } = require('../models')


class PhotoController {
    
    static findAll( req, res , next ){
        Photo.findAll()
            .then(photo => {
                res.status(200).json(photo)
            })
            .catch(err => {
                next(err)
            })
    }


    static create( req, res, next ){
        const { title , description , photographer , categories , photoUrl } = req.body
        
        Photo.create({
            title,
            description,
            photographer,
            categories,
            photoUrl,
            UserId : req.userData.id
        })
        .then(photo => {
            res.status(201).json({
                id : photo.id,
                title : photo.title,
                description : photo.description,
                categories : photo.categories,
                photoUrl : photo.photoUrl,
                UserId : photo.UserId
            })
        })
        .catch(err => {
            next(err)
        })
    }


    static update( req ,res , next ){
        const { title , description , photographer , categories , photoUrl , UserId } = req.body

        const { id } = req.params 

        Photo.findByPk( id )
            .then(photo => {
                if ( !photo ) throw { msg : "Photo Not Found"}
                return photo.update({ title, 
                    description , 
                    photographer, 
                    categories , 
                    photoUrl
                })
            })
            .then( photo => {
                res.status(200).json({
                    id : photo.id,
                    title : photo.title,
                    description : photo.description,
                    photographer : photo.photographer,
                    categories : photo.categories,
                    photoUrl : photo.photoUrl
                })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = PhotoController