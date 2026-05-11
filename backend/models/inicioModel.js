const db = require('../config/database');

const Inicio = {

    // Contar total de citas
    totalCitas: (callback) => {

        const sql = `
            SELECT COUNT(*) AS total
            FROM citas
        `;

        db.query(sql, callback);

    }

};

module.exports = Inicio;