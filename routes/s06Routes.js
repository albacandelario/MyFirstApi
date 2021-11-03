const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

const middleware = require('../middlewares/s06Middleware');
const controller = require('../controllers/s06Controller.js');

router.get('/ej01', middleware.checkNumMajorOne, controller.ej01);

module.exports = router;
