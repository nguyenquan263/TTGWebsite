var Response = require('../utilities/response');

module.exports = {
    async create(ctx) {
        try {

            var data = await ctx.db.qandas.create({
                QUESTION_CONTENT: ctx.request.body.q_content,
                ANSWER_CONTENT: ctx.request.body.a_content,
                SENDER_EMAIL: ctx.request.body.sender_email,
                IS_PRIVATE: ctx.request.body.is_private,
                UPLOAD_DATE: ctx.request.body.upload_date,
                STATUS: ctx.request.body.status
            });

            ctx.body = new Response(0, "Adding an Q & A successfully!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

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
    },

    async retrieveOne(ctx) {
        try {
            var targetID = ctx.params.id;
            var data = await ctx.db.qandas.findOne({
                where: {
                    ID: targetID
                }
            });

            if (data) {
                ctx.body = new Response(0, `This is the Q & A with ID equal ${targetID}!`, data);
            } else {
                ctx.body = new Response(2, `Cannot find the Q & A with ID equal ${targetID}`, null);
            }


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async delete(ctx) {
        try {
            var targetID = ctx.params.id;
            var result = await ctx.db.qandas.destroy({
                where: {
                    ID: targetID
                }
            });

            if (result === 0) {
                ctx.body = new Response(2, `Cannot find the Q & A with ID equal ${targetID}`, null);
            } else {
                ctx.body = new Response(0, "Delete this Q & A successully", null);
            }




        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async update(ctx) {
        try {
            var targetID = ctx.params.id;

            var results = await ctx.db.qandas.update({
                QUESTION_CONTENT: ctx.request.body.q_content,
                ANSWER_CONTENT: ctx.request.body.a_content,
                SENDER_EMAIL: ctx.request.body.sender_email,
                IS_PRIVATE: ctx.request.body.is_private,
                UPLOAD_DATE: ctx.request.body.upload_date,
                STATUS: ctx.request.body.status
            }, {
                where: { ID: targetID }
            });



            if (results[0] === 0) {
                ctx.body = new Response(2, `Cannot find the Q & A with ID equal ${targetID}`, null);
            } else {

                var updatedAdmin = await ctx.db.qandas.findOne({
                    where: {
                        ID: targetID
                    }
                });

                ctx.body = new Response(0, "Update this Q & A successully", updatedAdmin);
            }


        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
}