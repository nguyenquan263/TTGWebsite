const BCRYPT = require('bcrypt');
const SALT_ROUND = 10;
module.exports = {
    async hashPassword(password) {
        try {
            return await BCRYPT.hash(password, SALT_ROUND);
        } catch (err) {
            console.log(err);
        }
    },

    async comparePassword(password, hash) {
        try {
            return await BCRYPT.compare(password, hash);
        } catch (err) {
            console.log(err);
        }
    }
}