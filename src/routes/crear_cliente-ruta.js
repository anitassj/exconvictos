const express = require('express');
const router = express.Router();
const crearUsuario = require('../controllers/crear_cliente-controlador');
const validarUsuario = require('../middleware/validarUsuario');

router.post('/crear_usuario', validarUsuario, crearUsuario);

module.exports = router;