const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/usuario/vehiculos', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'usuario_vehiculos.ejs'));
});

router.get('/usuario', (req, res) => {
    res.redirect('/usuario/vehiculos');
});

module.exports = router;