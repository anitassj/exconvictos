// ruta usuario_datospersonales.js
const express = require('express');
const router = express.Router();
//const validarUsuario = require("../middleware/validarUsuario");
const { obtenerDatosPersonales } = require('../../controllers/usuarioDatosPersController');

router.get('/datos-personales/:id_cliente', obtenerDatosPersonales);
router.get('/datos-personales' , obtenerDatosPersonales);


module.exports = router;