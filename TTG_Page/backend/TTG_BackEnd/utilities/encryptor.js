const CRYPTO = require('crypto');
module.exports = {
    async hashPassword(password) {
        var mykey = await CRYPTO.createCipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(password, 'utf8', 'hex')
        return mystr += mykey.final('hex');
    },

    async comparePassword(password, hash) {
        var mykey = await CRYPTO.createDecipher('aes-128-cbc', 'mypassword');
        var mystr = mykey.update(hash, 'hex', 'utf8')
        mystr += mykey.final('utf8');

        return (password === mystr);
    }
}