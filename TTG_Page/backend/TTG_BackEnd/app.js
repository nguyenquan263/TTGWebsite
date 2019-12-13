const KOA = require('koa');
const KOA_ROUTER = require('koa-router');
const KOA_PARSER = require('koa-parser');
const PORT = 8080;

var app = new KOA();


var db = require("./models");
var router = require('./routes');

db.sequelize.sync()
    .then(() => console.log("Database synced!"))
    .catch((err) => console.log(err));


app.context.db = db;
app.use(KOA_PARSER());
app.use(router.routes());

app.use( async (ctx) => {
    ctx.body = "This is TTG BackEnd.";
});


app.listen(PORT);
console.log(`This application is running on port ${PORT}.`);
