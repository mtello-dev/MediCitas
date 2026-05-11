const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// IMPORTAR RUTAS
const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctores');
const especialidadRoutes = require('./routes/especialidades');
const citaRoutes = require('./routes/citas');
const historialRoutes = require('./routes/historial');
const usuarioRoutes = require('./routes/usuarios');
const inicioRoutes = require('./routes/inicio');

// MIDDLEWARES
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// RUTA PRINCIPAL
app.get('/', (req, res) => {

    res.json({
        sistema: 'MediCitas API',
        version: '1.0.0',
        estado: 'Servidor funcionando correctamente'
    });

});

// USAR RUTAS
app.use('/api/auth', authRoutes);

app.use('/api/doctores', doctorRoutes);

app.use('/api/especialidades', especialidadRoutes);

app.use('/api/citas', citaRoutes);

app.use('/api/historial', historialRoutes);

app.use('/api/usuarios', usuarioRoutes);

app.use('/api/inicio', inicioRoutes);

// MANEJO DE RUTAS NO ENCONTRADAS
app.use((req, res) => {

    res.status(404).json({
        mensaje: 'Ruta no encontrada'
    });

});

// PUERTO
const PORT = process.env.PORT || 3000;

// INICIAR SERVIDOR
app.listen(PORT, () => {

    console.log(`
 Puerto: ${PORT}
 URL: http://localhost:${PORT}
    `);

});