const Inicio = require('../models/inicioModel');

const obtenerInicio = (req,res) => {

    Inicio.totalCitas((err,results)=>{

        if(err) return res.status(500).json(err);

        const totalCitas = results[0].total;
        res.json({totalCitas});
    });
}