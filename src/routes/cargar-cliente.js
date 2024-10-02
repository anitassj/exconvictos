// cargarClienteRoutes.js
const express = require('express');
const router = express.Router();
const CargarClienteController = require('../controllers/cargar-clienteController');
const multer = require('multer'); 

const upload = multer({ dest: 'uploads/' }); 

router.post('/guardarDatos', upload.single('foto'), CargarClienteController.guardarDatos);

module.exports = router;
