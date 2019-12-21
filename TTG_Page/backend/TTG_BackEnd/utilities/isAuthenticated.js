const JWT_SERVICE = require('./jwt');
const Response = require('./response');
module.exports = async(ctx, next) => {
    var message = ""
    try {

        if (!ctx.req.headers.authorization) {
            message = "Missing authorization field";
        }

        console.log(ctx.req.headers.authorization);

        var token = ctx.req.headers.authorization;

        token = token.split(' ')[1];

        try {
            var decodedToken = JWT_SERVICE.verify(token);
        } catch (err) {
            message = "Wrong or Expired authorize token";
        }

        var user = await ctx.db.admins.findOne({
            where: {
                ID: decodedToken.payload.user
            }
        });

        ctx.state.user = user.id;
        await next();
    } catch (err) {

        ctx.body = new Response(3, message, err);

    }
}