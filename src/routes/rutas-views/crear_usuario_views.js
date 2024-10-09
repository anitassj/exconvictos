const express = require('express');
const path = require('path'); 
const validarUsuario = require('../../middleware/validarUsuario');
const router = express.Router();

router.get('/crear_usuario', validarUsuario, (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'crearUsuario.ejs'));
});

module.exports = router;