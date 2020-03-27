const crypto = require('crypto')

module.exports =  function genereateUniqueId() {
    return crypto.randomBytes(4).toString('HEX')
}
