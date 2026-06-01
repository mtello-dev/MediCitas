const db = require('../config/database');

const getInicio = (req, res) => {

    db.query('SELECT COUNT(*) AS total FROM usuarios', (err, usuarios) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        db.query('SELECT COUNT(*) AS total FROM citas', (err, citas) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Bienvenido al sistema MediCitas',
                fecha: new Date().toISOString(),
                módulos: [
                    'usuarios',
                    'doctores',
                    'especialidades',
                    'citas',
                    'historial'
                ],
                resumen: {
                    Total_Usuarios: usuarios[0].total,
                    Total_Citas: citas[0].total
              }
            });

        });

    });

};

module.exports = {
    getInicio
};