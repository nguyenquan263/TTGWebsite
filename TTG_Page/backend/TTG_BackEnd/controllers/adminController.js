var Response = require('../utilities/response');
var Encryptor = require('../utilities/encryptor');

module.exports = {
    async create(ctx) {
        console.log(ctx.request.body.file);
        try {
            var encryptedPassword = await Encryptor.hashPassword(ctx.request.body.password);
            
            var data = await ctx.db.admins.create({
                USERNAME: ctx.request.body.username,
                PASSWORD: encryptedPassword,
                ROLE: ctx.request.body.role,
                STATUS: ctx.request.body.status
            });

            ctx.body = new Response(0, "Adding an Admin successfully!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async retrieveAll(ctx) {
        console.log(ctx);
        try {
            var data = await ctx.db.admins.findAll({
                order: [
                    ['ID', 'DESC']
                ]
            });

            ctx.body = new Response(0, "This is the Admin list!", data);
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async retrieveOne(ctx) {
        try {
            var targetID = ctx.params.id;
            var data = await ctx.db.admins.findOne({
                where: {
                    ID: targetID
                }
            });

            if (data) {
                ctx.body = new Response(0, `This is the Admin with ID equal ${targetID}!`, data);
            } else {
                ctx.body = new Response(2, `Cannot find the Admin with ID equal ${targetID}`, null);
            }


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async delete(ctx) {
        try {
            var targetID = ctx.params.id;
            var result = await ctx.db.admins.destroy({
                where: {
                    ID: targetID
                }
            });

            if (result === 0) {
                ctx.body = new Response(2, `Cannot find the Admin with ID equal ${targetID}`, null);
            } else {
                ctx.body = new Response(0, "Delete this Admin successully", null);
            }




        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async update(ctx) {
        try {
            var targetID = ctx.params.id;

            var inputPassword = ctx.request.body.password;

            var encryptedPassword = null;

            if (inputPassword) {
               encryptedPassword = await Encryptor.hashPassword(ctx.request.body.password);
            }


            var results = await ctx.db.admins.update({
                USERNAME: ctx.request.body.username,
                PASSWORD: encryptedPassword,
                ROLE: ctx.request.body.role,
                STATUS: ctx.request.body.status
            }, {
                where: { ID: targetID }
            });



            if (results[0] === 0) {
                ctx.body = new Response(2, `Cannot find the Admin with ID equal ${targetID}`, null);
            } else {

                var updatedAdmin = await ctx.db.admins.findOne({
                    where: {
                        ID: targetID
                    }
                });

                ctx.body = new Response(0, "Update this Admin successully", updatedAdmin);
            }


        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
}