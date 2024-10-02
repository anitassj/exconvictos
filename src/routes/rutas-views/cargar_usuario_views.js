const express = require('express');
const path = require('path'); 
const router = express.Router();

// ruta para mostrar el form cuando se selecciona en el panel "cargar cliente"
router.get('/cargar_usuario', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'carga.ejs'));
});

module.exports = router;