const express = require('express');
const path = require('path');
const perfilUsuarioController = require('../controllers/perfil_usuario_controller');
const router = express.Router();

// Ruta para mostrar el perfil del usuario utilizando el DNI
router.get('/perfil_usuario/:dni', perfilUsuarioController.mostrarPerfilPorDni);

module.exports = router;

