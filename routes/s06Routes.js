const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/s06Middleware');
const controller = require('../controllers/s06Controller.js');

router.get('/ej01', middleware.checkNumMajorOne, controller.ej01);
router.put('/ej02', middleware.checkej02, controller.ej02);

module.exports = router;
