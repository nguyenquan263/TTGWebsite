const Koa = require('koa');
const Router = require('koa-router');
const multer = require('@koa/multer');

const app = new Koa();
const router = new Router();


var storage = multer.diskStorage({
    destination: function(req, file, callback) {

        console.log("vo duoc roi");
        callback(null, './public');
    },
    filename: function(req, file, callback) {
        callback(null, "hehe" + file.originalname);
    }
});


const upload = multer({ storage: storage });

// add a route for uploading multiple files
router.post(
    '/upload-multiple-files',
    upload.array('avatar'),
    ctx => {
        console.log('ctx.request.files', ctx.request.files);
        console.log('ctx.files', ctx.files);
        ctx.body = 'done';
    }
);

// add a route for uploading single files
router.post(
    '/upload-single-file',
    upload.single('avatar'),
    ctx => {
        console.log('ctx.request.file', ctx.request.file);
        console.log('ctx.file', ctx.file);
        ctx.body = 'done';
    }
);

// add the router to our app
app.use(router.routes());
app.use(router.allowedMethods());

// start the server
app.listen(3000);