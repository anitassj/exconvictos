const express = require('express');
const router = express.Router();
const crearUsuario = require('../controllers/crear_cliente-controlador');

router.post('/crear_usuario', crearUsuario);

module.exports = router;