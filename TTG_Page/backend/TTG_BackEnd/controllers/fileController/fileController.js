var Response = require('../../utilities/response');
var Encryptor = require('../../utilities/encryptor');
var JWT = require('../../utilities/jwt');
var fs = require('fs');

module.exports = {
    async uploadFile(ctx) {
        // ctx.body = ctx.request.body.file;

        fs.readFile(ctx.request.body.file.path, function (err, data) {

            var imageName = ctx.request.body.file.name
            console.log(imageName);
            /// If there's an error
            if(!imageName){
    
                console.log("There was an error")
    
            } else {
    
              var newPath = __dirname + "/../../public/" + imageName;
              console.log(newPath);
              /// write file to uploads/fullsize folder
              fs.writeFile(newPath, data, function (err) {
                console.log(data);
                /// let's see it
                // res.redirect("/public/" + imageName);
                ctx.body = "ok";
              });
            }
        });
    }
}