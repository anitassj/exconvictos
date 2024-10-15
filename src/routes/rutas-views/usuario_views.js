const express = require('express');
const path = require('path'); 
const validarUsuario = require('../../middleware/validarUsuario');
const router = express.Router();

router.get('/usuario', validarUsuario, (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'usuario.ejs'));
});

module.exports = router;