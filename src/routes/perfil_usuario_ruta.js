const express = require('express');
const router = express.Router();
const perfilUsuarioController = require('../controllers/perfil_usuario_controller');

// ruta para mostrar el perfil de usuario
router.get('/perfil_usuario/:id', perfilController.mostrarPerfil);

module.exports = router;
