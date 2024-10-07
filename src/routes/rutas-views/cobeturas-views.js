const express = require('express');
const router = express.Router();

// Ruta para mostrar coberturas
router.get('/coberturas', (req, res) => {
    res.render('coberturas'); // Esto renderiza coberturas.ejs
});

module.exports = router;
