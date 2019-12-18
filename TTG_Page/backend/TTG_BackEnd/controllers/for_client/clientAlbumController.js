var Response = require('../../utilities/response');

module.exports = {
    async retrieveAll(ctx) {
        try {
            var data = await ctx.db.albums.findAll({
                order: [
                    ['ID', 'DESC']
                ]
            });

            ctx.body = new Response(0, "This is the Album list!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);

        }
    }
}