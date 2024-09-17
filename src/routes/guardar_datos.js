const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const conexion = require('../models/db');

// Ruta para procesar el formulario
router.post('/guardar-datos', (req, res) => {
    const { tipo, patente, anio, idMarca, idModelo, nombre, apellido,  email, celular } = req.body;

    console.log('Datos recibidos:', req.body);

    if (isNaN(anio)) {
        return res.status(400).json({ error: 'Año inválido. Por favor ingrese un número válido para el año.' });
    }
    if (!idModelo || idModelo === 'undefined') {
        return res.status(400).json({ error: 'ID del modelo es requerido y no puede ser indefinido.' });
    }

    conexion.query(
        'INSERT INTO solicitante_form (tipo, patente, anio, id_marca, id_modelo, nombre, apellido, email, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular],
        (error, results) => {
            if (error) {
                console.error('Error en la consulta:', error);
                return res.status(400).json({ error: 'Error al procesar los datos.' });
            } else {
                console.log('Resultados de la consulta:', results);

                res.json({
            message: 'Formulario completado con éxito.',
            data: results
                })
        }
    }
    );
});



module.exports = router;