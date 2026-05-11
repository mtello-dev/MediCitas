const express = require('express');

const router = express.Router();

const historialController = require('../controllers/historialController');

// Obtener todos los historiales
router.get(
    '/',
    historialController.getAll
);

// Obtener historial por usuario
router.get(
    '/usuario/:usuario_id',
    historialController.getByUsuario
);

// Obtener historial por ID
router.get(
    '/:id',
    historialController.getById
);

// Crear historial
router.post(
    '/',
    historialController.create
);

// Actualizar historial
router.put(
    '/:id',
    historialController.update
);

// Eliminar historial
router.delete(
    '/:id',
    historialController.remove
);

module.exports = router;