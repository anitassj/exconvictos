const conexion = require('../models/db');

const crearUsuario = async (usuario) => {
    const { nombre, apellido, dni, email, clave, rol_id } = usuario;
    try {
        // esto es lo que verifica si ya existe un usuario con ese dni o email
        const [existeUsuario] = await conexion.promise().query(
            'SELECT id FROM usuarios WHERE dni = ? OR email = ?',
            [dni, email]
        );
        
        if (existeUsuario.length > 0) {
            throw new Error('Este usuario ya ha sido creado.');
        }
        console.log({ nombre, apellido, dni, email, clave, rol_id });
        await conexion.promise().query(
            'INSERT INTO usuarios (nombre, apellido, dni, email, clave, rol_id) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, dni, email, clave, rol_id]
        );
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        throw new Error('Este usuario ya ha sido creado.' + error.message);
    }

};

module.exports = crearUsuario;