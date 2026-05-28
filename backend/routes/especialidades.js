const express = require('express');

const router = express.Router();

const especialidadController = require('../controllers/especialidadController');

// Obtener todas las especialidades
router.get(
    '/',
    especialidadController.getAll
);

// Obtener especialidad por ID
router.get(
    '/:id',
    especialidadController.getById
);

// Crear especialidad
router.post(
    '/',
    especialidadController.create
);

// Actualizar especialidad
router.put(
    '/:id',
    especialidadController.update
);

// Eliminar especialidad
router.delete(
    '/:id',
    especialidadController.remove
);

module.exports = router;