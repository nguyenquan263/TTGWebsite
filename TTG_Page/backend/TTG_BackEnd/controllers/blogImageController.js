var Response = require('../utilities/response');

module.exports = {
    async create(ctx) {
        try {
            var data = await ctx.db.blog_images.create({
                NAME: ctx.request.body.name,
                BLOG_ID: ctx.request.body.blog_id,
                STATUS: ctx.request.body.status
            });

            ctx.body = new Response(0, "Adding an Image successfully", data);
        } catch(err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async retrieveAll(ctx) {
        try {
            var data = await ctx.db.blog_images.findAll({});

            ctx.body = new Response(0, "This is the Image list!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);

        }
    },

    async retrieveOne(ctx) {
        try {
            var targetID = ctx.params.id;

            console.log(targetID);

            var data = await ctx.db.blog_images.findOne({
                where: {
                    ID: targetID
                }
            });

            if (data) {
                ctx.body = new Response(0, `This is the Image with ID equal ${targetID}!`, data);
            } else {
                ctx.body = new Response(2, `Cannot find the Image with ID equal ${targetID}`, null);
            }
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async delete(ctx) {
        try {
            var targetID = ctx.params.id;
            var result = await ctx.db.blog_images.destroy({
                where: {
                    ID: targetID
                }
            });

            if (result === 0 ) {
                ctx.body = new Response(2, `Cannot find the Image with ID equal ${targetID}`, null);
            } else {
                ctx.body = new Response(0, 'Delete this Image successfully!', null);
            }

        } catch (ctx) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async update(ctx) {
        try {
            var targetID = ctx.params.id;

            var result = await ctx.db.blog_images.update({
                NAME: ctx.request.body.name,
                BLOG_ID: ctx.request.body.blog_id,
                STATUS: ctx.request.body.status
            }, {
                where: { ID: targetID}
            });

            if (result[0] === 0) {
                ctx.body = new Response(2, `Cannot find the Image with ID equal ${targetID}`, null);
            } else {
                var updatedBlog = await ctx.db.blog_images.findOne({
                    where: {
                        ID: targetID
                    }
                });

                ctx.body = new Response(0, "Update this Image successully", updatedBlog);
            }


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
}