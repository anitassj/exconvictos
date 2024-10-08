const express = require('express');
const router = express.Router();
const UsuarioVehiculoController = require('../controllers/usuarioVehiculoController');

router.get('/vehiculos/:id_cliente', UsuarioVehiculoController.obtenerVehiculos);

module.exports = router;