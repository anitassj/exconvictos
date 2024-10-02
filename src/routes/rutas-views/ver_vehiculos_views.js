const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/ver_vehiculo', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'vehiculos.ejs'));
});

module.exports = router;