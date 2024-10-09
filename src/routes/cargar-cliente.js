// cargarClienteRoutes.js
const express = require('express');
const router = express.Router();
const CargarClienteController = require('../controllers/cargar-clienteController');
const upload = require('../middleware/upload'); //configuracion de multer
const validarUsuario = require('../middleware/validarUsuario');

//const upload = multer({ dest: 'uploads/' }); 

router.post('/guardarDatos', validarUsuario, upload.single('foto'), CargarClienteController.guardarDatos);

module.exports = router;
