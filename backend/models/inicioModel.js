const db = require('../config/db');

const Inicio = {
    totalCitas: (callback) => {
        db.query('SELECT COUNT(*) AS total FROM citas', callback);
    }
};

module.exports = Inicio