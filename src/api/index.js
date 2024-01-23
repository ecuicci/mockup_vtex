const express = require('express');

const emojis = require('./emojis');

const router = express.Router();
const ExampleController = require('../Controllers/ExampleController');
const VtexController = require('../Controllers/VtexController');


router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.get('/alive', ExampleController.alive);
router.get('/call-vtex', VtexController.callVtex);
router.post('/call-vtex', VtexController.callVtex);
router.get('/create-case-crm', VtexController.crearCaso);
router.post('/create-case-crm', VtexController.crearCaso);



router.use('/emojis', emojis);

module.exports = router;
