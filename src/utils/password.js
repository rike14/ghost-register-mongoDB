const bcrypt = require('bcrypt')

async function crypto(pwd) {

    const salt = await bcrypt.genSalt()

    const passwordCrypt = await bcrypt.hash(pwd, salt)

    return passwordCrypt
}

module.exports = {
    crypto,
}