const express = require('express');
const router = express.Router();
const vistaControlador = require('../controllers/vistaController');
// const validarUsuario = require('../middleware/validarUsuario');
const controller = new vistaControlador();

router.get('/vistaClientes', controller.mostrarLista); 
router.get('/perfil_usuario/:id', controller.obtenerClienteID) //al final se cambió a ID

module.exports = router;