const KOA_MULTER = require('koa-multer');
const PATH = require('path');

module.exports = {

    async uploadFile(ctx){
        console.log(ctx.request.files);

        ctx.body = "ok";
    }
   
}