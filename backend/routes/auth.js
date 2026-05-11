const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// LOGIN
router.post(
    '/login',
    authController.login
);

// REGISTRO
router.post(
    '/registro',
    authController.registro
);

module.exports = router;