const express = require('express');
const router = express.Router();
const UsuarioVehiculoController = require('../controllers/usuarioVehiculoController');
const validarUsuario = require('../middleware/validarUsuario');

router.get('/vehiculos/:id_cliente', validarUsuario, UsuarioVehiculoController.obtenerVehiculos);

module.exports = router;