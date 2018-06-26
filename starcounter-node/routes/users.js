var express = require('express');
var router = express.Router();

var Star = require('../models/users');
var userController = require('../controllers/users');

/* post user plus. */
router.post('/plus/:id', userController.plusFunction );

/* post user minus. */
router.post('/minus/:id', userController.minusFunction );

/* GET users listing. */
router.get('/', userController.listFunction);

module.exports = router;
