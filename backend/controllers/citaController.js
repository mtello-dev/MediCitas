const Cita = require('../models/citaModel');

// Obtener todas las citas
const getAll = (req, res) => {

    Cita.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// Obtener cita por ID
const getById = (req, res) => {

    Cita.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Cita no encontrada'
            });
        }

        res.status(200).json(results[0]);

    });

};

// Crear cita
const create = (req, res) => {

    const {
        usuario_id,
        doctor_id,
        fecha,
        hora
    } = req.body;

    if (!usuario_id || !doctor_id || !fecha || !hora) {
        return res.status(400).json({
            mensaje: 'Faltan campos obligatorios'
        });
    }

    Cita.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            mensaje: 'Cita creada correctamente',
            id: result.insertId
        });

    });

};

// Actualizar cita
const update = (req, res) => {

    Cita.update(req.params.id, req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Cita actualizada correctamente'
        });

    });

};

// Eliminar cita
const remove = (req, res) => {

    Cita.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Cita eliminada correctamente'
        });

    });

};

// Endpoint extra
const getPendientes = (req, res) => {

    Cita.getPendientes((err, results) => {

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
    getPendientes
};