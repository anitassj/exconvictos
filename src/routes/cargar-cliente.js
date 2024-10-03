// cargarClienteRoutes.js
const express = require('express');
const router = express.Router();
const CargarClienteController = require('../controllers/cargar-clienteController');
const upload = require('../middleware/upload'); //configuracion de multer

//const upload = multer({ dest: 'uploads/' }); 

router.post('/guardarDatos', upload.single('foto'), CargarClienteController.guardarDatos);

module.exports = router;
