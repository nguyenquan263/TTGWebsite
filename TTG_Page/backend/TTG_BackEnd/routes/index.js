const KOA_ROUTER = require('koa-router');

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


//SIGN UP - SIGN IN CONTROLLERS
router.post(CLIENT_PREFIX+'/login', clientAdminController.signIn);
router.post(CLIENT_PREFIX+'/signup', clientAdminController.signUp);




/*--------ANONYMOUS CONTROLLERS---------*/
router.get('/*', (ctx) => {
    ctx.body = new Response(3, "Nothing in here", null);
});

module.exports = router;