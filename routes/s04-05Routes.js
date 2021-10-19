const express = require('express');
const router = express.Router();

const ejController = require('../controllers/s04-05Controller.js');

router.get('/ej01FechaMs', ejController.fechaMs);
router.get('/ej01FechaGuiones', ejController.fechaGuiones);
router.get('/ej01FechaPuntos', ejController.fechaPuntos);


module.exports = router;