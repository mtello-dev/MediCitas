const db = require('../config/database');

const Doctor = {

    // Obtener todos los doctores
    getAll: (callback) => {

        const sql = `
            SELECT
                doctores.*,
                especialidades.nombre AS especialidad
            FROM doctores
            INNER JOIN especialidades
            ON doctores.especialidad_id = especialidades.id
        `;

        db.query(sql, callback);

    },

    // Obtener doctor por ID
    getById: (id, callback) => {

        const sql = `
            SELECT *
            FROM doctores
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Crear doctor
    create: (doctor, callback) => {

        const sql = `
            INSERT INTO doctores
            (
                nombre,
                email,
                telefono,
                especialidad_id,
                experiencia
            )
            VALUES (?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                doctor.nombre,
                doctor.email,
                doctor.telefono,
                doctor.especialidad_id,
                doctor.experiencia
            ],
            callback
        );

    },

    // Actualizar doctor
    update: (id, doctor, callback) => {

        const sql = `
            UPDATE doctores
            SET
                nombre = ?,
                email = ?,
                telefono = ?,
                especialidad_id = ?,
                experiencia = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                doctor.nombre,
                doctor.email,
                doctor.telefono,
                doctor.especialidad_id,
                doctor.experiencia,
                id
            ],
            callback
        );

    },

    // Eliminar doctor
    delete: (id, callback) => {

        const sql = `
            DELETE FROM doctores
            WHERE id = ?
        `;

        db.query(sql, [id], callback);

    },

    // Obtener doctores por especialidad
    getByEspecialidad: (especialidad_id, callback) => {

        const sql = `
            SELECT *
            FROM doctores
            WHERE especialidad_id = ?
        `;

        db.query(sql, [especialidad_id], callback);

    }

};

module.exports = Doctor;