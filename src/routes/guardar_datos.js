// routes/formulario.js
const express = require('express');
const router = express.Router();
const SolicitanteModelo = require('../models/SolicitanteModelo');

router.post('/guardar-datos', (req, res) => {
    const { tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular } = req.body;

    console.log('Datos recibidos:', req.body);

    if (isNaN(anio)) {
        return res.status(400).json({ error: 'Año inválido. Por favor ingrese un número válido para el año.' });
    }
    if (!idModelo || idModelo === 'undefined') {
        return res.status(400).json({ error: 'ID del modelo es requerido y no puede ser indefinido.' });
    }

    const solicitanteForm = { tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular };
    
    SolicitanteModelo.guardarDatos(solicitanteForm, (error, results) => {
        if (error) {
            return res.status(400).json({ error: 'Error al procesar los datos.' });
        }
        res.json({
            message: 'Formulario completado con éxito.',
            data: results
        });
    });
});
module.exports = router;