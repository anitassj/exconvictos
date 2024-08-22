// configurar express 
const express = require('express');
// permite generar rutas y exportarlas
const router = express.Router();
const path = require('path'); 

// generar las rutas
router.get('/login', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'login.ejs'));
});

// exportar un archivo en js
module.exports = router;

