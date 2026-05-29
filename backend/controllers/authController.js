const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Auth = require('../models/authModel');

require('dotenv').config();

// Registro de usuarios
const registro = (req, res) => {

    const { nombre, email, password } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !password) {
        return res.status(400).json({
            mensaje: 'Nombre, email y password son requeridos'
        });
    }

    // Verificar si el email ya existe
    Auth.findByEmail(email, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length > 0) {
            return res.status(400).json({
                mensaje: 'Este email ya está registrado'
            });
        }

        // Encriptar contraseña
        const passwordEncriptada = bcrypt.hashSync(password, 10);

        // Crear usuario
        Auth.createUser({
            nombre,
            email,
            password: passwordEncriptada
        }, (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                mensaje: 'Usuario registrado correctamente',
                id: result.insertId
            });

        });

    });

};

// Login
const login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            mensaje: 'Email y password son requeridos'
        });
    }

    Auth.findByEmail(email, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(401).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        const usuario = results[0];

        // Comparar contraseña
        const passwordCorrecta = bcrypt.compareSync(
            password,
            usuario.password
        );

        if (!passwordCorrecta) {
            return res.status(401).json({
                mensaje: 'Credenciales incorrectas'
            });
        }

        // Generar token
        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        res.json({
            mensaje: 'Login exitoso',
            token,
            nombre: usuario.nombre
        });

    });

};

module.exports = {
    registro,
    login
};