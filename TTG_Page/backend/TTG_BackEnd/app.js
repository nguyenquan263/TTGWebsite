const KOA = require('koa');
const KOA_STATIC = require('koa-static');
const KOA_ROUTER = require('koa-router');
const PORT = 8080;

var app = new KOA();
var router = new KOA_ROUTER();
var db = require("./models");

var router = require('./routes');



db.sequelize.sync({
        logging: false
    })
    .then(() => console.log("Database synced!"))
    .catch((err) => console.log(err));


app.context.db = db;
app.use(KOA_STATIC(__dirname + '/public'));
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(PORT);
console.log("This application is running on port " + PORT);