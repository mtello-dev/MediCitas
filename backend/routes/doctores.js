const express = require('express');

const router = express.Router();

const doctorController = require('../controllers/doctorController');

// Obtener todos los doctores
router.get(
    '/',
    doctorController.getAll
);

// Obtener doctor por ID
router.get(
    '/:id',
    doctorController.getById
);

// Obtener doctores por especialidad
router.get(
    '/especialidad/:especialidad_id',
    doctorController.getByEspecialidad
);

// Crear doctor
router.post(
    '/',
    doctorController.create
);

// Actualizar doctor
router.put(
    '/:id',
    doctorController.update
);

// Eliminar doctor
router.delete(
    '/:id',
    doctorController.remove
);

module.exports = router;