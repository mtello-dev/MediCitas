const Inicio = require('../models/inicioModel');

// Ruta principal del sistema
const obtenerInicio = (req, res) => {

    Inicio.totalCitas((err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json({

            sistema: 'MediCitas',

            mensaje:
                'Bienvenido al sistema de gestión médica MediCitas',

            fechaServidor: new Date().toISOString(),

            modulos: [
                'Usuarios',
                'Doctores',
                'Especialidades',
                'Citas',
                'Historial Médico'
            ],

            totalCitas: results[0].total

        });

    });

};

module.exports = {
    obtenerInicio
};