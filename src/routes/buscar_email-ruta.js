const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/buscar_email-controlador');

const validarUsuario = require("../middleware/validarUsuario");
router.get('/buscar_email/:dni', validarUsuario, usuariosController.buscarEmailPorDni);


module.exports = router;