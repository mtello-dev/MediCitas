const db = require('../config/database');

const Cita = {

    // Obtener todas las citas
    getAll: (callback) => {

        const sql = `
            SELECT
                citas.*,
                usuarios.nombre AS paciente,
                doctores.nombre AS doctor
            FROM citas
            INNER JOIN usuarios
            ON citas.usuario_id = usuarios.id
            INNER JOIN doctores
            ON citas.doctor_id = doctores.id
        `;

        db.query(sql, callback);

    },

    // Obtener cita por ID
    getById: (id, callback) => {

        const sql = `
            SELECT *
            FROM citas
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Crear cita
    create: (cita, callback) => {

        const sql = `
            INSERT INTO citas
            (
                usuario_id,
                doctor_id,
                fecha,
                hora,
                motivo,
                estado
            )
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                cita.usuario_id,
                cita.doctor_id,
                cita.fecha,
                cita.hora,
                cita.motivo,
                cita.estado || 'Pendiente'
            ],
            callback
        );

    },

    // Actualizar cita
    update: (id, cita, callback) => {

        const sql = `
            UPDATE citas
            SET
                usuario_id = ?,
                doctor_id = ?,
                fecha = ?,
                hora = ?,
                motivo = ?,
                estado = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                cita.usuario_id,
                cita.doctor_id,
                cita.fecha,
                cita.hora,
                cita.motivo,
                cita.estado,
                id
            ],
            callback
        );

    },

    // Eliminar cita
    delete: (id, callback) => {

        const sql = `
            DELETE FROM citas
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Obtener citas pendientes
    getPendientes: (callback) => {

        const sql = `
            SELECT *
            FROM citas
            WHERE estado = 'Pendiente'
        `;

        db.query(sql, callback);

    }

};

module.exports = Cita;