const KOA = require('koa');
const KOA_STATIC = require('koa-static');
const KOA_ROUTER = require('koa-router');
const KOA_PARSER = require('koa-parser');
const KOA_MULTER = require('koa-multer');
const PATH = require('path');
const PORT = 8080;

var app = new KOA();




var db = require("./models");
var router = require('./routes');

db.sequelize.sync({
        logging: false
    })
    .then(() => console.log("Database synced!"))
    .catch((err) => console.log(err));


app.context.db = db;

app.use(KOA_PARSER());
app.use(KOA_STATIC(__dirname + '/public'));
app.use(router.routes());

var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`Server is running on http://${host}:${port}`);

});