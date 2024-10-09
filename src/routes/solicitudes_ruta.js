const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudes_controller');
const validarUsuario = require('../middleware/validarUsuario');
const controller = new solicitudesController();

router.get('/solicitudes', validarUsuario, controller.mostrarDatos); 
router.get('/solicitudes/:id', validarUsuario, controller.mostrarFormulario); 
router.put('/solicitudes/:id/marcar-leido', validarUsuario, controller.marcarComoLeido.bind(controller));


module.exports = router;