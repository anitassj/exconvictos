const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario
router.get('/solicitante_form', (req, res) => {
    res.render('form'); // Renderiza el archivo formulario.ejs
});

module.exports = router;