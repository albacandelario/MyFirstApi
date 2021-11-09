const express = require('express');
const router = express.Router();
const bodyParser = express.json();

const middleware = require('../middlewares/s06Middleware');
const controller = require('../controllers/s06Controller.js');

router.get('/ej01', middleware.checkNumMajorOne, controller.ej01);
router.put('/ej02', bodyParser, middleware.checkej02, controller.ej02);

module.exports = router;
