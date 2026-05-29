const express = require('express');

const router = express.Router();

const inicioController = require('../controllers/inicioController');

const verificarToken = require('../middlewares/authMiddleware');

router.get(
    '/',
    verificarToken,
    inicioController.getInicio
);

module.exports = router;