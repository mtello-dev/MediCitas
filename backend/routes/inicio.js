const express = require('express');

const router = express.Router();

const inicioController = require('../controllers/inicioController');

// Ruta principal
router.get(
    '/',
    inicioController.obtenerInicio
);

module.exports = router;