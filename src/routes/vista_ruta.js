const express = require('express');
const router = express.Router();
const vistaControlador = require('../controllers/vistaController');
const controller = new vistaControlador();

router.get('/vistaClientes', controller.mostrarLista); 
router.get('/perfil_usuario/:id', controller.obtenerClienteID); 

module.exports = router;