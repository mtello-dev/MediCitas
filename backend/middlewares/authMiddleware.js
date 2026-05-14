const jwt = require('jsonwebtoken');

require('dotenv').config();

const verificarToken = (req, res, next) => {

    // Obtener header Authorization
    const authHeader = req.headers['authorization'];

    // Verificar si existe
    if (!authHeader) {

        return res.status(401).json({
            mensaje: 'Token requerido'
        });

    }

    // Formato:
    // Bearer TOKEN
    const token = authHeader.split(' ')[1];

    // Verificar token
    jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, usuario) => {

            if (err) {

                return res.status(403).json({
                    mensaje: 'Token inválido'
                });

            }

            // Guardar usuario en request
            req.usuario = usuario;

            next();

        }
    );

};

module.exports = verificarToken;