const bcrypt = require('bcryptjs');

const registro = (req, res) => {
    const { nombre, email, password } = req.body;

    if(!nombre || !email || !password){
        return res.status(400).json({mensaje:'Todos los campos son obligatorios'});
    }

    Auth.findByEmail(email, (err, results) => {
        if(err) return res.status(500).json(err);

        if(results.length > 0){
            return res.status(400).json({mensaje:'El email ya existe'});
        }

        const passwordEncriptada = bcrypt.hashSync(password,10);

        Auth.createUser({
            nombre,
            email,
            password: passwordEncriptada
        }, (err, result) => {
            if(err) return res.status(500).json(err);

            res.status(201).json({
                mensaje:'Usuario registrado correctamente'
            });
        });
    });
};

const login = (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({mensaje:'Email y password requeridos'});
    }

    Auth.findByEmail(email,(err,results)=>{
        if(err) return res.status(500).json(err);

        if(results.length === 0){
            return res.status(401).json({mensaje:'Credenciales incorrectas'});
        }

        const usuario = results[0];

        const passwordCorrecta = bcrypt.compareSync(password, usuario.password);

        if(!passwordCorrecta){
            return res.status(401).json({mensaje:'Credenciales incorrectas'});
        }

        const token = jwt.sign(
            {
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        res.json({
            mensaje:'Login exitoso',
            token
        });
    });
};

module.exports = {registro, login};