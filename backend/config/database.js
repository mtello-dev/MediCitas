const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});

// Conectar a MySQL
connection.connect((err) => {

    if(err){

        console.log('Error de conexión a MySQL');

        console.log(err);

    }else{

        console.log('MySQL conectado correctamente');

    }

});

module.exports = connection;