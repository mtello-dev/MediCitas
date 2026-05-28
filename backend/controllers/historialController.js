const Historial = require('../models/historialModel');

// Obtener todos los historiales
const getAll = (req, res) => {

    Historial.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// Obtener historial por ID
const getById = (req, res) => {

    Historial.getById(req.params.id, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Historial no encontrado'
            });
        }

        res.status(200).json(results[0]);

    });

};

// Crear historial
const create = (req, res) => {

    const {
        usuario_id,
        diagnostico,
        tratamiento,
        fecha
    } = req.body;

    if (!usuario_id || !diagnostico || !tratamiento || !fecha) {
        return res.status(400).json({
            mensaje: 'Todos los campos son obligatorios'
        });
    }

    Historial.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            mensaje: 'Historial creado correctamente',
            id: result.insertId
        });

    });

};

// Actualizar historial
const update = (req, res) => {

    Historial.update(req.params.id, req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Historial actualizado correctamente'
        });

    });

};

// Eliminar historial
const remove = (req, res) => {

    Historial.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Historial eliminado correctamente'
        });

    });

};

// Endpoint extra
const getByUsuario = (req, res) => {

    Historial.getByUsuario(
        req.params.usuario_id,
        (err, results) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json(results);

        }
    );

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getByUsuario
};