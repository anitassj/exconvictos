const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/crear_usuario', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'crearUsuario.ejs'));
});

module.exports = router;