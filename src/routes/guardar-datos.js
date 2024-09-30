const express = require('express');
const router = express.Router();
const SolicitanteModelo = require('../models/SolicitanteModelo');

router.post('/guardar-datos', async (req, res) => {
    try {
        const { tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular } = req.body;

        if (!tipo || !patente || !anio || !idMarca || !idModelo || !nombre || !apellido || !email || !celular) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
        }

        if (isNaN(anio)) {
            return res.status(400).json({ error: 'Año inválido. Por favor ingrese un número válido para el año.' });
        }

        //llamo al modelo
        const solicitanteForm = { tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular };
        const results = await SolicitanteModelo.guardarDatos(solicitanteForm);

        res.json({
            message: 'Formulario completado con éxito.',
            data: results
        });
    } catch (error) {
        console.error('Error al procesar los datos:', error);
        res.status(500).json({ error: 'Error al procesar los datos.' });
    }
});

module.exports = router;
