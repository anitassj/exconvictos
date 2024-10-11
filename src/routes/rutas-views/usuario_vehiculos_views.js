const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/vehiculos-asegurados', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'usuario_vehiculos.ejs'));
});

module.exports = router;