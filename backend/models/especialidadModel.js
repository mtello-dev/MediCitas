const db = require('../config/database');

const Especialidad = {

    // Obtener todas las especialidades
    getAll: (callback) => {

        const sql = `
            SELECT *
            FROM especialidades
        `;

        db.query(sql, callback);

    },

    // Obtener especialidad por ID
    getById: (id, callback) => {

        const sql = `
            SELECT *
            FROM especialidades
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Crear especialidad
    create: (especialidad, callback) => {

        const sql = `
            INSERT INTO especialidades
            (
                nombre,
                descripcion
            )
            VALUES (?, ?)
        `;

        db.query(
            sql,
            [
                especialidad.nombre,
                especialidad.descripcion
            ],
            callback
        );

    },

    // Actualizar especialidad
    update: (id, especialidad, callback) => {

        const sql = `
            UPDATE especialidades
            SET
                nombre = ?,
                descripcion = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                especialidad.nombre,
                especialidad.descripcion,
                id
            ],
            callback
        );

    },

    // Eliminar especialidad
    delete: (id, callback) => {

        const sql = `
            DELETE FROM especialidades
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    }

};

module.exports = Especialidad;