const crearUsuario = require('../models/crear_cliente-modelo'); 
const crearUsuarioController = async (req, res) => {
    console.log('req.body:', req.body);
    const { nombre, apellido, dni, email, clave, rol_id } = req.body;

    try {
        await crearUsuario({ nombre, apellido, dni, email, clave, rol_id });
        console.log('Controlador: usuario creado exitosamente');
        res.json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el usuario:', error);

        if (error.message.includes('Este usuario ya ha sido creado')) {
            // Si el error es porque el usuario ya existe, enviar un mensaje claro al frontend
            return res.status(400).json({ error: 'Este usuario ya ha sido creado.' });
        }

        res.status(500).json({ error: 'Error en el servidor' });
    }
};

module.exports = crearUsuarioController;