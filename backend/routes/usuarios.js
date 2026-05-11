const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

// Obtener todos los usuarios
router.get(
    '/',
    usuarioController.getAll
);

// Obtener pacientes
router.get(
    '/pacientes/lista',
    usuarioController.getPacientes
);

// Obtener usuario por ID
router.get(
    '/:id',
    usuarioController.getById
);

// Crear usuario
router.post(
    '/',
    usuarioController.create
);

// Actualizar usuario
router.put(
    '/:id',
    usuarioController.update
);

// Eliminar usuario
router.delete(
    '/:id',
    usuarioController.remove
);

module.exports = router;