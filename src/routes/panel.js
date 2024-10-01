const express = require('express');
const router = express.Router();

const validarUsuario = require("../middleware/validarUsuario");

const controllerPanel = require("../controllers/panel");
const panelController = new controllerPanel();

router.get('/panel', validarUsuario, panelController.mostrarListado);

module.exports = router;