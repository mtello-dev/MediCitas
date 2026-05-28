const Especialidad = require('../models/especialidadModel');

// Obtener todas las especialidades
const getAll = (req, res) => {

    Especialidad.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// Obtener especialidad por ID
const getById = (req, res) => {

    Especialidad.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Especialidad no encontrada'
            });
        }

        res.status(200).json(results[0]);

    });

};

// Crear especialidad
const create = (req, res) => {

    const { nombre, descripcion } = req.body;

    if (!nombre || !descripcion) {
        return res.status(400).json({
            mensaje: 'Todos los campos son obligatorios'
        });
    }

    Especialidad.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            mensaje: 'Especialidad creada correctamente',
            id: result.insertId
        });

    });

};

// Actualizar especialidad
const update = (req, res) => {

    Especialidad.update(req.params.id, req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Especialidad actualizada correctamente'
        });

    });

};

// Eliminar especialidad
const remove = (req, res) => {

    Especialidad.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Especialidad eliminada correctamente'
        });

    });

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};