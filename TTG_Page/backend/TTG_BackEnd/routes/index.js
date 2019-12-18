const KOA_ROUTER = require('koa-router');
const KOA_MULTER = require('koa-multer');
const PATH = require('path');

const ADMIN_PREFIX = '/manage';
const CLIENT_PREFIX = '/client';

const Response = require('../utilities/response');

var router = new KOA_ROUTER();

/*----------ADMIN CONTROLLERS----------*/

var adminController = require('../controllers/adminController');
var youtubeClipController = require('../controllers/youtubeClipController');
var qAndAController = require('../controllers/qandaController');
var blogController = require('../controllers/blogController');
var albumController = require('../controllers/albumController');
var imageController = require('../controllers/imageController');
var blogImageController = require('../controllers/blogImageController');
var fileController = require('../controllers/fileController/fileController');

//ADMIN ROUTES
router.get(ADMIN_PREFIX + '/admin', adminController.retrieveAll);
router.get(ADMIN_PREFIX + '/admin/:id', adminController.retrieveOne);
router.post(ADMIN_PREFIX + '/admin', adminController.create);
router.delete(ADMIN_PREFIX + '/admin/:id', adminController.delete);
router.put(ADMIN_PREFIX + '/admin/:id', adminController.update);

//YOUTUBE CLIP ROUTES
router.get(ADMIN_PREFIX + '/youtube_clip', youtubeClipController.retrieveAll);
router.get(ADMIN_PREFIX + '/youtube_clip/:id', youtubeClipController.retrieveOne);
router.post(ADMIN_PREFIX + '/youtube_clip', youtubeClipController.create);
router.delete(ADMIN_PREFIX + '/youtube_clip/:id', youtubeClipController.delete);
router.put(ADMIN_PREFIX + '/youtube_clip/:id', youtubeClipController.update);

//Q & A ROUTES
router.get(ADMIN_PREFIX + '/qanda', qAndAController.retrieveAll);
router.get(ADMIN_PREFIX + '/qanda/:id', qAndAController.retrieveOne);
router.post(ADMIN_PREFIX + '/qanda', qAndAController.create);
router.delete(ADMIN_PREFIX + '/qanda/:id', qAndAController.delete);
router.put(ADMIN_PREFIX + '/qanda/:id', qAndAController.update);

//BLOG ROUTES
router.get(ADMIN_PREFIX + '/blog', blogController.retrieveAll);
router.get(ADMIN_PREFIX + '/blog/:id', blogController.retrieveOne);
router.post(ADMIN_PREFIX + '/blog', blogController.create);
router.delete(ADMIN_PREFIX + '/blog/:id', blogController.delete);
router.put(ADMIN_PREFIX + '/blog/:id', blogController.update);

//ALBUM ROUTES
router.get(ADMIN_PREFIX + '/album', albumController.retrieveAll);
router.get(ADMIN_PREFIX + '/album/:id', albumController.retrieveOne);
router.post(ADMIN_PREFIX + '/album', albumController.create);
router.delete(ADMIN_PREFIX + '/album/:id', albumController.delete);
router.put(ADMIN_PREFIX + '/album/:id', albumController.update);

//IMAGE ROUTES
router.get(ADMIN_PREFIX + '/image', imageController.retrieveAll);
router.get(ADMIN_PREFIX + '/image/:id', imageController.retrieveOne);
router.post(ADMIN_PREFIX + '/image', imageController.create);
router.delete(ADMIN_PREFIX + '/image/:id', imageController.delete);
router.put(ADMIN_PREFIX + '/image/:id', imageController.update);

//BLOG_IMAGE ROUTES
router.get(ADMIN_PREFIX + '/blog_image', blogImageController.retrieveAll);
router.get(ADMIN_PREFIX + '/blog_image/:id', blogImageController.retrieveOne);
router.post(ADMIN_PREFIX + '/blog_image', blogImageController.create);
router.delete(ADMIN_PREFIX + '/blog_image/:id', blogImageController.delete);
router.put(ADMIN_PREFIX + '/blog_image/:id', blogImageController.update);





/*----------CLIENT CONTROLLERS----------*/

var clientAdminController = require('../controllers/for_client/clientAdminController');
var clientAlbumController = require('../controllers/for_client/clientAlbumController');
var clientBlogController = require('../controllers/for_client/clientBlogController');
var clientBlogImageController = require('../controllers/for_client/clientBlogImageController');
var clientImageController = require('../controllers/for_client/clientImageController');
var clientQAndAController = require('../controllers/for_client/clientQAndAController');
var clientYoutubeClipController = require('../controllers/for_client/clientYoutubeClipController');



//SIGN UP - SIGN IN CONTROLLERS
router.post(CLIENT_PREFIX+'/login', clientAdminController.signIn);
router.post(CLIENT_PREFIX+'/signup', clientAdminController.signUp);

//ALBUM CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/album', clientAlbumController.retrieveAll);

//BLOG CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/blog', clientBlogController.retrieveAll);

//BLOG IMAGE CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/blog_image', clientBlogImageController.retrieveAll);

//Q & A CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/qanda', clientQAndAController.retrieveAll);

//IMAGE CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/image', clientImageController.retrieveAll);

//YOUTUBE CLIP CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX+'/youtube_clip', clientYoutubeClipController.retrieveAll);



/*-------------------FILE CONTROLLERS------------------------*/

const storage = KOA_MULTER.diskStorage({
    destination: function (req, file, cb) {
        cb(null, PATH.join(__dirname ,'/public'))
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})
// file upload restrictions
const limits = {
    Fields: 10,// number of non-file fields
    FileSize: 500 * 1024,// fileSize in b
    Files: 1// files
}
const upload = KOA_MULTER({storage,limits})

router.post('/user/file', upload.single('file'), async (ctx,next)=>{
    ctx.body = {
        code: 1,
        data: ctx.file
    }
})




/*--------ANONYMOUS CONTROLLERS---------*/
router.all('/*', (ctx) => {
    ctx.body = new Response(3, "Nothing in here", null);
});

module.exports = router;