const express = require('express');

const router = express.Router();

const citaController = require('../controllers/citaController');

const verificarToken = require('../middlewares/authMiddleware');

// Obtener todas las citas
router.get(
    '/',
    verificarToken,
    citaController.getAll
);

// Obtener citas pendientes
router.get(
    '/pendientes/lista',
    citaController.getPendientes
);

// Obtener cita por ID
router.get(
    '/:id',
    citaController.getById
);

// Crear cita
router.post(
    '/',
    citaController.create
);

// Actualizar cita
router.put(
    '/:id',
    citaController.update
);

// Eliminar cita
router.delete(
    '/:id',
    citaController.remove
);

module.exports = router;