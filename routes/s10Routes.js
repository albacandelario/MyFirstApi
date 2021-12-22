const express = require('express');
const router = express.Router();

const s10Controller = require('../controllers/s10Controller');
const joiMiddleware = require('../middlewares/s10Middleware');
const s10Schema = require('../models/joi/s10Schema');

router.get('/details/:id',
    joiMiddleware.validate(s10Schema.selectFilmSchema, 'params'),
    s10Controller.selectById
);

module.exports = router;