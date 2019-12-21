const KOA_ROUTER = require('koa-router');
const ADMIN_PREFIX = '/manage';
const CLIENT_PREFIX = '/client';
const Response = require('../utilities/response');
const KOA_BODY = require('koa-body');

var router = new KOA_ROUTER();
var isAuthenticated = require('../utilities/isAuthenticated');


/*----------ADMIN CONTROLLERS----------*/

var adminController = require('../controllers/adminController');
var youtubeClipController = require('../controllers/youtubeClipController');
var qAndAController = require('../controllers/qandaController');
var blogController = require('../controllers/blogController');
var albumController = require('../controllers/albumController');

//ADMIN ROUTES
router.get(ADMIN_PREFIX + '/admin', isAuthenticated, adminController.retrieveAll);
router.get(ADMIN_PREFIX + '/admin/:id', isAuthenticated, adminController.retrieveOne);
router.post(ADMIN_PREFIX + '/admin', isAuthenticated, KOA_BODY(), adminController.create);
router.delete(ADMIN_PREFIX + '/admin/:id', isAuthenticated, adminController.delete);
router.put(ADMIN_PREFIX + '/admin/:id', isAuthenticated, KOA_BODY(), adminController.update);

//YOUTUBE CLIP ROUTES
router.get(ADMIN_PREFIX + '/youtube_clip', isAuthenticated, youtubeClipController.retrieveAll);
router.get(ADMIN_PREFIX + '/youtube_clip/:id', isAuthenticated, youtubeClipController.retrieveOne);
router.post(ADMIN_PREFIX + '/youtube_clip', isAuthenticated, KOA_BODY(), youtubeClipController.create);
router.delete(ADMIN_PREFIX + '/youtube_clip/:id', isAuthenticated, youtubeClipController.delete);
router.put(ADMIN_PREFIX + '/youtube_clip/:id', isAuthenticated, KOA_BODY(), youtubeClipController.update);

//Q & A ROUTES
router.get(ADMIN_PREFIX + '/qanda', isAuthenticated, qAndAController.retrieveAll);
router.get(ADMIN_PREFIX + '/qanda/:id', isAuthenticated, qAndAController.retrieveOne);
router.post(ADMIN_PREFIX + '/qanda', isAuthenticated, KOA_BODY(), qAndAController.create);
router.delete(ADMIN_PREFIX + '/qanda/:id', isAuthenticated, qAndAController.delete);
router.put(ADMIN_PREFIX + '/qanda/:id', isAuthenticated, KOA_BODY(), qAndAController.update);

//BLOG ROUTES
router.get(ADMIN_PREFIX + '/blog', isAuthenticated, blogController.retrieveAll);
router.get(ADMIN_PREFIX + '/blog/:id', isAuthenticated, blogController.retrieveOne);
router.post(ADMIN_PREFIX + '/blog', isAuthenticated, blogController.create);
router.delete(ADMIN_PREFIX + '/blog/:id', isAuthenticated, blogController.delete);
router.put(ADMIN_PREFIX + '/blog/:id', isAuthenticated, blogController.update);

//ALBUM ROUTES
router.get(ADMIN_PREFIX + '/album', isAuthenticated, albumController.retrieveAll);
router.get(ADMIN_PREFIX + '/album/:id', isAuthenticated, albumController.retrieveOne);
router.post(ADMIN_PREFIX + '/album', isAuthenticated, albumController.create);
router.delete(ADMIN_PREFIX + '/album/:id', isAuthenticated, albumController.delete);
router.put(ADMIN_PREFIX + '/album/:id', isAuthenticated, albumController.update);





/*----------CLIENT CONTROLLERS----------*/

var clientAdminController = require('../controllers/for_client/clientAdminController');
var clientAlbumController = require('../controllers/for_client/clientAlbumController');
var clientBlogController = require('../controllers/for_client/clientBlogController');
var clientQAndAController = require('../controllers/for_client/clientQAndAController');
var clientYoutubeClipController = require('../controllers/for_client/clientYoutubeClipController');



//SIGN UP - SIGN IN CONTROLLERS
router.post(CLIENT_PREFIX + '/login', KOA_BODY(), clientAdminController.signIn);
router.post(CLIENT_PREFIX + '/signup', KOA_BODY(), clientAdminController.signUp);

//ALBUM CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX + '/album', clientAlbumController.retrieveAll);

//BLOG CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX + '/blog', clientBlogController.retrieveAll);

//Q & A CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX + '/qanda', clientQAndAController.retrieveAll);

//YOUTUBE CLIP CONTROLLER FOR CLIENT
router.get(CLIENT_PREFIX + '/youtube_clip', clientYoutubeClipController.retrieveAll);





/*--------ANONYMOUS CONTROLLERS---------*/
router.all('/*', (ctx) => {
    ctx.body = new Response(6, "Nothing in here", null);
});

module.exports = router;