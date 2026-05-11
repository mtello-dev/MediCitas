const db = require('../config/database');

const Historial = {

    // Obtener todos los historiales
    getAll: (callback) => {

        const sql = `
            SELECT
                historial_medico.*,
                usuarios.nombre AS paciente
            FROM historial_medico
            INNER JOIN usuarios
            ON historial_medico.usuario_id = usuarios.id
        `;

        db.query(sql, callback);

    },

    // Obtener historial por ID
    getById: (id, callback) => {

        const sql = `
            SELECT *
            FROM historial_medico
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Crear historial
    create: (historial, callback) => {

        const sql = `
            INSERT INTO historial_medico
            (
                usuario_id,
                diagnostico,
                tratamiento,
                fecha
            )
            VALUES (?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                historial.usuario_id,
                historial.diagnostico,
                historial.tratamiento,
                historial.fecha
            ],
            callback
        );

    },

    // Actualizar historial
    update: (id, historial, callback) => {

        const sql = `
            UPDATE historial_medico
            SET
                usuario_id = ?,
                diagnostico = ?,
                tratamiento = ?,
                fecha = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                historial.usuario_id,
                historial.diagnostico,
                historial.tratamiento,
                historial.fecha,
                id
            ],
            callback
        );

    },

    // Eliminar historial
    delete: (id, callback) => {

        const sql = `
            DELETE FROM historial_medico
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Obtener historial por usuario
    getByUsuario: (usuario_id, callback) => {

        const sql = `
            SELECT *
            FROM historial_medico
            WHERE usuario_id = ?
        `;

        db.query(sql, [usuario_id], callback);

    }

};

module.exports = Historial;