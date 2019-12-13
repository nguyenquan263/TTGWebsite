const KOA_ROUTER = require('koa-router');

var router = new KOA_ROUTER();

var adminController = require('../controllers/adminController');

//ADMIN ROUTES
router.get('/admin', adminController.retrieveAll);
router.get('/admin/:id', adminController.retrieveOne);
router.post('/admin', adminController.create);
router.delete('/admin/:id', adminController.delete);
router.put('/admin/:id', adminController.update);

module.exports = router;