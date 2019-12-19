const KOA = require('koa');
const KOA_STATIC = require('koa-static');
const KOA_PARSER = require('koa-parser');
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
console.log(__dirname + '/public');
app.use(KOA_STATIC(__dirname + '/public'));
app.use(router.routes());
app.use(router.allowedMethods());


var server = app.listen(PORT, function () {
    var port = server.address().port;
    console.log(`Server is running on port ${port}`);

});