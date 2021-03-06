const express = require('express');
const router = express.Router();


const ejController = require('../controllers/s04-05Controller.js');

router.get('/ej01FechaMs', ejController.fechaMs);
router.get('/ej01FechaGuiones', ejController.fechaGuiones);
router.get('/ej01FechaPuntos', ejController.fechaPuntos);
router.get('/ej02Multiplicar/:input', ejController.multiplicar);
router.get('/ej03Factorial', ejController.factorial);
// const middleware = require('../middlewares/s04-05ex3Middleware');
// router.get('/fact', middleware.checkNumQueryParam, middleware.checkNumQueryInteger, controller.factorial);
router.get('/ej04Operacion', ejController.operacion);


module.exports = router;