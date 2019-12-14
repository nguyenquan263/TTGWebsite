var Response = require('../utilities/response');

module.exports = {
    async create(ctx) {
        try {
            var data = await ctx.db.youtube_clips.create({
                TITLE: ctx.request.body.title,
                LINK: ctx.request.body.link,
                DETAIL_INFO: ctx.request.body.detail_info,
                UPLOAD_DATE: ctx.request.body.upload_date,
                STATUS: ctx.request.body.status
            });

            ctx.body = new Response(0, "Adding a Youtube Clip successfully", data);
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async retrieveAll(ctx) {
        try {
            var data = await ctx.db.youtube_clips.findAll({});

            ctx.body = new Response(0, "This is the Youtube Clip list!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);

        }
    },

    async retrieveOne(ctx) {
        try {
            var targetID = ctx.params.id;

            console.log(targetID);

            var data = await ctx.db.youtube_clips.findOne({
                where: {
                    ID: targetID
                }
            });

            if (data) {
                ctx.body = new Response(0, `This is the Youtube Clip with ID equal ${targetID}!`, data);
            } else {
                ctx.body = new Response(2, `Cannot find the Youtube Clip with ID equal ${targetID}`, null);
            }
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async delete(ctx) {
        try {
            var targetID = ctx.params.id;
            var result = await ctx.db.youtube_clips.destroy({
                where: {
                    ID: targetID
                }
            });

            if (result === 0 ) {
                ctx.body = new Response(2, `Cannot find the Youtube Clip with ID equal ${targetID}`, null);
            } else {
                ctx.body = new Response(0, 'Delete this Youtube Clip successfully!', null);
            }

        } catch (ctx) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async update(ctx) {
        try {
            var targetID = ctx.params.id;

            var result = await ctx.db.youtube_clips.update({
                TITLE: ctx.request.body.title,
                LINK: ctx.request.body.link,
                DETAIL_INFO: ctx.request.body.detail_info,
                UPLOAD_DATE: ctx.request.body.upload_date,
                STATUS: ctx.request.body.status
            }, {
                where: { ID: targetID}
            });

            if (result === 0) {
                ctx.body = new Response(2, `Cannot find the Youtube Clip with ID equal ${targetID}`, null);
            } else {
                var updatedYoutubeClip = await ctx.db.youtube_clips.findOne({
                    where: {
                        ID: targetID
                    }
                });

                ctx.body = new Response(0, "Update this Youtube Clip successully", updatedYoutubeClip);
            }


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
} 