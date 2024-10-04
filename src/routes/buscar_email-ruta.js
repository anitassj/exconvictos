const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/buscar_email-controlador');


router.get('/buscar_email/:dni', usuariosController.buscarEmailPorDni);


module.exports = router;