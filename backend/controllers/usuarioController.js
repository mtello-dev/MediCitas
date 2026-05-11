const Usuario = require('../models/usuarioModel');

// Obtener usuarios
const getAll = (req, res) => {

    Usuario.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// Obtener usuario por ID
const getById = (req, res) => {

    Usuario.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Usuario no encontrado'
            });
        }

        res.status(200).json(results[0]);

    });

};

// Crear usuario
const create = (req, res) => {

    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({
            mensaje: 'Todos los campos son obligatorios'
        });
    }

    Usuario.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            mensaje: 'Usuario creado correctamente',
            id: result.insertId
        });

    });

};

// Actualizar usuario
const update = (req, res) => {

    Usuario.update(req.params.id, req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Usuario actualizado correctamente'
        });

    });

};

// Eliminar usuario
const remove = (req, res) => {

    Usuario.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Usuario eliminado correctamente'
        });

    });

};

// Endpoint extra
const getPacientes = (req, res) => {

    Usuario.getPacientes((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getPacientes
};