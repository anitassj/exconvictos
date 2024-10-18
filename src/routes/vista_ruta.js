const express = require('express');
const router = express.Router();
const vistaControlador = require('../controllers/vistaController');
// const validarUsuario = require('../middleware/validarUsuario');
const controller = new vistaControlador();

router.get('/vistaClientes', controller.mostrarLista); 
router.get('/perfil_usuario/:dni', controller.obtenerClienteID); 

module.exports = router;