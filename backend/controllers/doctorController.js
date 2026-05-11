const Doctor = require('../models/doctorModel');

// Obtener todos los doctores
const getAll = (req, res) => {

    Doctor.getAll((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

// Obtener doctor por ID
const getById = (req, res) => {

    const { id } = req.params;

    Doctor.getById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                mensaje: 'Doctor no encontrado'
            });
        }

        res.status(200).json(results[0]);

    });

};

// Crear doctor
const create = (req, res) => {

    const {
        nombre,
        email,
        telefono,
        especialidad_id,
        experiencia
    } = req.body;

    if (
        !nombre ||
        !email ||
        !telefono ||
        !especialidad_id ||
        experiencia === undefined
    ) {
        return res.status(400).json({
            mensaje: 'Todos los campos son obligatorios'
        });
    }

    if (experiencia < 0) {
        return res.status(400).json({
            mensaje: 'La experiencia no puede ser negativa'
        });
    }

    Doctor.create(req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(201).json({
            mensaje: 'Doctor creado correctamente',
            id: result.insertId
        });

    });

};

// Actualizar doctor
const update = (req, res) => {

    Doctor.update(req.params.id, req.body, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Doctor actualizado correctamente'
        });

    });

};

// Eliminar doctor
const remove = (req, res) => {

    Doctor.delete(req.params.id, (err, result) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({
            mensaje: 'Doctor eliminado correctamente'
        });

    });

};

// Endpoint extra
const getByEspecialidad = (req, res) => {

    Doctor.getByEspecialidad(
        req.params.especialidad_id,
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
    getByEspecialidad
};