const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const doctorRoutes = require('./routes/doctores');
const especialidadRoutes = require('./routes/especialidades');
const citaRoutes = require('./routes/citas');
const historialRoutes = require('./routes/historial');
const usuarioRoutes = require('./routes/usuarios');
const inicioRoutes = require('./routes/inicio');

app.use('/api/auth', authRoutes);
app.use('/api/doctores', doctorRoutes);
app.use('/api/especialidades', especialidadRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/inicio', inicioRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});