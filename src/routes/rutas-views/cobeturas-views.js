const express = require('express');
const validarUsuario = require('../../middleware/validarUsuario');
const router = express.Router();

// Ruta para mostrar coberturas
router.get('/coberturas', validarUsuario, (req, res) => {
    res.render('coberturas'); // Esto renderiza coberturas.ejs
});

module.exports = router;
