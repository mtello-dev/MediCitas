const db = require('../config/database');

const Auth = {

    // Buscar usuario por email
    findByEmail: (email, callback) => {

        const sql = `
            SELECT *
            FROM usuarios
            WHERE email = ?
        `;

        db.query(sql, [email], callback);

    },

    // Crear usuario
    createUser: (usuario, callback) => {

        const sql = `
            INSERT INTO usuarios
            (
                nombre,
                email,
                password
            )
            VALUES (?, ?, ?)
        `;

        db.query(
            sql,
            [
                usuario.nombre,
                usuario.email,
                usuario.password
            ],
            callback
        );

    }

};

module.exports = Auth;