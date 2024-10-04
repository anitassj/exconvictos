const express = require('express');
const router = express.Router();
const solicitudesController = require('../controllers/solicitudes_controller');
const controller = new solicitudesController();

router.get('/solicitudes', controller.mostrarDatos); 
router.get('/solicitudes/:id', controller.mostrarFormulario); 
router.put('/solicitudes/:id/marcar-leido', controller.marcarComoLeido.bind(controller));


module.exports = router;