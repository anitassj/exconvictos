//usuarioDatosPersRuta.js
const express = require('express');
const router = express.Router();
const usuarioDatosPersController = require('../controllers/usuarioDatosPersController');

// Ruta para obtener todos los datos personales
router.get('/usuario/datospersonales', usuarioDatosPersController.obtenerTodosLosDatos);

module.exports = router;