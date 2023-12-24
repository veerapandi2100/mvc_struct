var express = require('express');
var router = express.Router();

var appController = require('../controller/appController');
var middlware = require('../middlware/validate');

//const sequelize = require('../config/database'); 


router.use(middlware.valid);

router.get('/', appController.appGet);

router.get('/about', middlware.userValid, appController.appAbout);


module.exports = router;