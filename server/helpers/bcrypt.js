const bcrypt = require('bcryptjs')

function hassPass(password){
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function comparePass(password , hassPass){
    return bcrypt.compareSync(password, hassPass); // true
}

module.exports = {
    hassPass,
    comparePass
}