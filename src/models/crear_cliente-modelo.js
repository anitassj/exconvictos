const conexion = require('../models/db');

const crearUsuario = async (usuario) => {
    const { nombre, apellido, dni, email, clave, rol_id } = usuario;
    try {
        await conexion.promise().query(
            'INSERT INTO usuarios (nombre, apellido, dni, email, clave, rol_id) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, dni, email, clave, rol_id]
        );
    } catch (error) {
        throw new Error('Error al crear el usuario');
    }
};

module.exports = crearUsuario;