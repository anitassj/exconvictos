// ruta usuario_datospersonales.js
const express = require('express');
const router = express.Router();
const { obtenerDatosPersonales } = require('../controllers/usuarioDatosPersController');

router.get('/datos-personales/:id_cliente', obtenerDatosPersonales);

module.exports = router;