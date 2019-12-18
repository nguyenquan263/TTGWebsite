var Response = require('../../utilities/response');
var Encryptor = require('../../utilities/encryptor');
var JWT = require('../../utilities/jwt');

module.exports = {
    async signUp(ctx) {
        try {
            var encryptedPassword = await Encryptor.hashPassword(ctx.request.body.password);

            var data = await ctx.db.admins.create({
                USERNAME: ctx.request.body.username,
                PASSWORD: encryptedPassword,
                ROLE: "ADMIN",
                STATUS: 1
            });

            ctx.body = new Response(0, "Sign up successfully!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async signIn(ctx) {
        try {

            var inputUsername = ctx.request.body.username;
            var inputPassword = ctx.request.body.password;


            var data = null;

            if (inputUsername && inputPassword) {
                data = await ctx.db.admins.findOne({
                    where: {
                        USERNAME: inputUsername
                    }
                });
    
                if (data) {

                    var checkPasswordResult = await Encryptor.comparePassword(inputPassword, data.PASSWORD);

                    if (checkPasswordResult) {
                        

                        //give JWT here
                        var token = JWT.issue({
                            payload: {
                                user: data.ID
                            }
                        },'1 day');
                        
                        ctx.body = new Response(0, 'Log in successfully!', {
                            USERNAME: data.USERNAME,
                            TOKEN: token
                        });


                    } else {
                        ctx.body = new Response(2, 'Invalid Username / Password!', null);
                    }
                } else {
                    ctx.body = new Response(2, 'Invalid Username / Password!', null);
                }

                
            } else {
                ctx.body = new Response(4, "Please input Username / Password!", null);
            }

            


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    }
}