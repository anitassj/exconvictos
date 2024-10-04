/*const express = require('express');
const router = express.Router();
const conexion = require('../models/crear_cliente-modelo');

router.post('/crear_usuario', async (req, res) => {
    const { nombre, apellido, dni, email, clave, rol_id } = req.body;
    
    try {
        await conexion.promise().query(
            'INSERT INTO usuarios (nombre, apellido, dni, email, clave, rol_id) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, apellido, dni, email, clave, rol_id]
        );
        res.json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});*/