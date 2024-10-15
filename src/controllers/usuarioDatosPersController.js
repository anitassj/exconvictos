// usuarioDatosPersController.js
const express = require('express');
const router = express.Router();
const DatosPersonalesModel = require('../models/usuarioDatosPersModel');

// Controlador para obtener datos personales
const obtenerDatosPersonales = async (req, res) => {
    const idCliente = req.params.id_cliente;

    try {
        const datosPersonales = await DatosPersonalesModel.obtenerTodos(idCliente);
        if (datosPersonales) {
            return res.status(200).json(datosPersonales);
        } else {
            return res.status(404).json({ message: 'No se encontraron datos personales para este cliente.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor.', error: error.message });
    }
};

router.get('/datos-personales/:id_cliente', obtenerDatosPersonales);

module.exports = { obtenerDatosPersonales };