const KOA_ROUTER = require('koa-router');

var router = new KOA_ROUTER();

var adminController = require('../controllers/adminController');
var youtubeClipController = require('../controllers/youtubeClipController');
var qAndAController = require('../controllers/qandaController');

//ADMIN ROUTES
router.get('/admin', adminController.retrieveAll);
router.get('/admin/:id', adminController.retrieveOne);
router.post('/admin', adminController.create);
router.delete('/admin/:id', adminController.delete);
router.put('/admin/:id', adminController.update);

//YOUTUBE CLIP ROUTES
router.get('/youtubeClip', youtubeClipController.retrieveAll);
router.get('/youtubeClip/:id', youtubeClipController.retrieveOne);
router.post('/youtubeClip', youtubeClipController.create);
router.delete('/youtubeClip/:id', youtubeClipController.delete);
router.put('/youtubeClip/:id', youtubeClipController.update);

//Q & A ROUTES
router.get('/qAndA', qAndAController.retrieveAll);
router.get('/qAndA/:id', qAndAController.retrieveOne);
router.post('/qAndA', qAndAController.create);
router.delete('/qAndA/:id', qAndAController.delete);
router.put('/qAndA/:id', qAndAController.update);

module.exports = router;