const db = require('../config/database');

const Usuario = {

    // Obtener usuarios
    getAll: (callback) => {

        const sql = `
            SELECT
                id,
                nombre,
                email
            FROM usuarios
        `;

        db.query(sql, callback);

    },

    // Obtener usuario por ID
    getById: (id, callback) => {

        const sql = `
            SELECT
                id,
                nombre,
                email
            FROM usuarios
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Crear usuario
    create: (usuario, callback) => {

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

    },

    // Actualizar usuario
    update: (id, usuario, callback) => {

        const sql = `
            UPDATE usuarios
            SET
                nombre = ?,
                email = ?,
                password = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                usuario.nombre,
                usuario.email,
                usuario.password,
                id
            ],
            callback
        );

    },

    // Eliminar usuario
    delete: (id, callback) => {

        const sql = `
            DELETE FROM usuarios
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Obtener pacientes
    getPacientes: (callback) => {

        const sql = `
            SELECT
                id,
                nombre,
                email
            FROM usuarios
        `;

        db.query(sql, callback);

    }

};

module.exports = Usuario;