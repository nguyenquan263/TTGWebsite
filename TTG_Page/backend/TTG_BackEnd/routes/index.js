const KOA_ROUTER = require('koa-router');

var router = new KOA_ROUTER();

var adminController = require('../controllers/adminController');
var youtubeClipController = require('../controllers/youtubeClipController');
var qAndAController = require('../controllers/qandaController');
var blogController = require('../controllers/blogController');
var albumController = require('../controllers/albumController');
var imageController = require('../controllers/imageController');
var blogImageController = require('../controllers/blogImageController');

//ADMIN ROUTES
router.get('/admin', adminController.retrieveAll);
router.get('/admin/:id', adminController.retrieveOne);
router.post('/admin', adminController.create);
router.delete('/admin/:id', adminController.delete);
router.put('/admin/:id', adminController.update);

//YOUTUBE CLIP ROUTES
router.get('/youtube_clip', youtubeClipController.retrieveAll);
router.get('/youtube_clip/:id', youtubeClipController.retrieveOne);
router.post('/youtube_clip', youtubeClipController.create);
router.delete('/youtube_clip/:id', youtubeClipController.delete);
router.put('/youtube_clip/:id', youtubeClipController.update);

//Q & A ROUTES
router.get('/qAndA', qAndAController.retrieveAll);
router.get('/qAndA/:id', qAndAController.retrieveOne);
router.post('/qAndA', qAndAController.create);
router.delete('/qAndA/:id', qAndAController.delete);
router.put('/qAndA/:id', qAndAController.update);

//BLOG ROUTES
router.get('/blog', blogController.retrieveAll);
router.get('/blog/:id', blogController.retrieveOne);
router.post('/blog', blogController.create);
router.delete('/blog/:id', blogController.delete);
router.put('/blog/:id', blogController.update);

//ALBUM ROUTES
router.get('/album', albumController.retrieveAll);
router.get('/album/:id', albumController.retrieveOne);
router.post('/album', albumController.create);
router.delete('/album/:id', albumController.delete);
router.put('/album/:id', albumController.update);

//IMAGE ROUTES
router.get('/image', imageController.retrieveAll);
router.get('/image/:id', imageController.retrieveOne);
router.post('/image', imageController.create);
router.delete('/image/:id', imageController.delete);
router.put('/image/:id', imageController.update);

//BLOG_IMAGE ROUTES
router.get('/blog_image', blogImageController.retrieveAll);
router.get('/blog_image/:id', blogImageController.retrieveOne);
router.post('/blog_image', blogImageController.create);
router.delete('/blog_image/:id', blogImageController.delete);
router.put('/blog_image/:id', blogImageController.update);

module.exports = router;