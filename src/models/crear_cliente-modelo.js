const conexion = require('../models/db');

const crearUsuario = async (usuario) => {
    const { nombre, apellido, dni, email, clave, rol_id } = usuario;
    try {
        console.log({ nombre, apellido, dni, email, clave, rol_id });
        await conexion.promise().query(
            'INSERT INTO usuarios (nombre, apellido, dni, email, clave, rol_id) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, dni, email, clave, rol_id]
        );
    } catch (error) {
        console.error('Error en la consulta SQL:', error);
        throw new Error('Error al crear el usuario: ' + error.message);
    }

};

module.exports = crearUsuario;