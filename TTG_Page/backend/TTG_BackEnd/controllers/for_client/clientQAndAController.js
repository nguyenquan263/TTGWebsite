var Response = require('../../utilities/response');

module.exports = {

    async retrieveAll(ctx) {
        try {
            var data = await ctx.db.qandas.findAll({
                order: [
                    ['ID', 'DESC']
                ]
            });

            ctx.body = new Response(0, "This is the Q & A list!", data);
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
}