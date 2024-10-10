// usuarioDatosPersController.js
const { json } = require('express');
const modelo = require('../models/usuarioDatosPersModel');

const obtenerTodosLosDatos = (req, res) => {
    modelo.obtenerDatosPersonales((error, datos) => {
        if(error) {
            return res.status(500).json( { error: 'Error al obtener los datos' } );
        } else {
            return res.json(datos);
        }
    });
};

module.exports = { obtenerTodosLosDatos };