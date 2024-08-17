// configurar express 
const express = require('express');
// permite generar rutas y exportarlas
const router = express.Router();

// generar las rutas
router.get('/login', (req, res) => {
    res.send("Acá va la pág. para loguearse"); //cuando accedo a esta ruta muestra esto
});

// exportar un archivo en js
module.exports = router;

