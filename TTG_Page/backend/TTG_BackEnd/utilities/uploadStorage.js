const KOA_MULTER = require('@koa/multer');

var storage = KOA_MULTER.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/../public");
    },
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});

module.exports = storage;