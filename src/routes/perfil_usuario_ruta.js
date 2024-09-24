const express = require('express');
const router = express.Router();
const perfilUsuarioController = require('../controllers/perfil_usuario_controller');

// ruta para mostrar el perfil de usuario
router.get('/:id', perfilUsuarioController.mostrarPerfil);

// rutas para los botones
router.post('/:id/emitir', (req, res) => {
  // aca iria la lógica para emitir una póliza
});

router.post('/:id/editar', (req, res) => {
  // aca iria la lógica para editar el perfil
});

router.post('/:id/guardar', (req, res) => {
  // aca iria la lógica para guardar los cambios
});

module.exports = router;
