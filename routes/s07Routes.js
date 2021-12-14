const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/s07Middleware');
const controller = require('../controllers/s07Controller');

router.post('/phone', controller.anadir);
router.get('/phones', controller.mostrar);
router.put('/phone', controller.modificar);
router.delete('/phone', controller.eliminar);

module.exports = router;