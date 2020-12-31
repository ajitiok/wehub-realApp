const { User } = require('../models')
const { comparePass } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register( req, res, next ){
        const { email , password } = req.body

        User.create({
            email,
            password
            })
            .then(user => {
                res.status(201).json({
                    id : user.id,
                    email : user.email,
                    role : user.role
                })
            })
            .catch(err => {
                next(err);
            })
    }



    static login( req, res , next){
        const { email , password } = req.body 

        User.findOne({
            where : { email }
        })
        .then( user => {
            if ( !user ) throw { msg : 'Invalid Email or Password' , statusCode : 400 }
            let resultCompare = comparePass(password, user.password)

            if ( !resultCompare ) throw { msg : "Invalid Email or Password" , statusCode : 400 }

            let payload = {
                id : user.id,
                email : user.email,
                role : user.role
            }

            let access_token = generateToken(payload)
            res.status(200).json({
                id : user.id,
                email : user.email,
                role : user.role,
                access_token
            })
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = UserController