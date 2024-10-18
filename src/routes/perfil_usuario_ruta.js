const express = require('express');
const router = express.Router();
const perfilUsuarioController = require('../controllers/perfil_usuario_controller');

router.get('/perfil_usuario/:dni', perfilUsuarioController.mostrarPerfil);

module.exports = router;
