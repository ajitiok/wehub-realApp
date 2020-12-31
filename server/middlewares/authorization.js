function authorization ( req, res, next){
    if ( req.userData.role == 'admin') next()
    else {
        throw { name : 'AuthenticationFailed'}
    }
}

module.exports = authorization