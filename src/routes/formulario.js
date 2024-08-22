const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario
router.get('/formulario', (req, res) => {
    res.render('form'); // Renderiza el archivo formulario.ejs
});

module.exports = router;