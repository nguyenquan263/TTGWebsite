var Response = require('../utilities/response');
var multer = require('@koa/multer');
var multerStorage = require('../utilities/uploadStorage');

module.exports = {
    async create(ctx) {
        try {

            var uploader = multer({ storage: multerStorage }).single('thumbnail_pic');
            await uploader(ctx);

            var data = await ctx.db.blogs.create({
                TITLE: ctx.request.body.title,
                THUMBNAIL_PIC: ctx.file.filename,
                CONTENT: ctx.request.body.content,
                UPLOAD_DATE: ctx.request.body.upload_date,
                STATUS: ctx.request.body.status
            });

            ctx.body = new Response(0, "Adding a Blog successfully", data);
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async retrieveAll(ctx) {
        try {
            var data = await ctx.db.blogs.findAll({
                order: [
                    ['ID', 'DESC']
                ]
            });

            ctx.body = new Response(0, "This is the Blog list!", data);

        } catch (err) {

            ctx.body = new Response(1, "Internal Error.", err);

        }
    },

    async retrieveOne(ctx) {
        try {
            var targetID = ctx.params.id;

            console.log(targetID);

            var data = await ctx.db.blogs.findOne({
                where: {
                    ID: targetID
                }
            });

            if (data) {
                ctx.body = new Response(0, `This is the Blog with ID equal ${targetID}!`, data);
            } else {
                ctx.body = new Response(2, `Cannot find the Blog with ID equal ${targetID}`, null);
            }
        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }

    },

    async delete(ctx) {
        try {
            var targetID = ctx.params.id;
            var result = await ctx.db.blogs.destroy({
                where: {
                    ID: targetID
                }
            });

            if (result === 0) {
                ctx.body = new Response(2, `Cannot find the Blog with ID equal ${targetID}`, null);
            } else {
                ctx.body = new Response(0, 'Delete this Blog successfully!', null);
            }

        } catch (ctx) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    },

    async update(ctx) {
        try {
            var targetID = ctx.params.id;

            var uploader = multer({ storage: multerStorage }).single('thumbnail_pic');
            await uploader(ctx);

            var updateContent = {};

            if (typeof ctx.file !== 'undefined') {
                updateContent = {
                    TITLE: ctx.request.body.title,
                    THUMBNAIL_PIC: ctx.file.filename,
                    UPLOAD_DATE: ctx.request.body.upload_date,
                    CONTENT: ctx.request.body.content,
                    STATUS: ctx.request.body.status
                }
            } else {
                updateContent = {
                    TITLE: ctx.request.body.title,
                    UPLOAD_DATE: ctx.request.body.upload_date,
                    CONTENT: ctx.request.body.content,
                    STATUS: ctx.request.body.status
                }
            }

            var result = await ctx.db.blogs.update(updateContent, {
                where: { ID: targetID }
            });

            if (result[0] === 0) {
                ctx.body = new Response(2, `Cannot find the Blog with ID equal ${targetID}`, null);
            } else {
                var updatedBlog = await ctx.db.blogs.findOne({
                    where: {
                        ID: targetID
                    }
                });

                ctx.body = new Response(0, "Update this Blog successully", updatedBlog);
            }


        } catch (err) {
            ctx.body = new Response(1, "Internal Error.", err);
        }
    }
}