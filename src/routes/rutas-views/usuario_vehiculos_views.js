const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/vehiculos-asegurados', (req, res) => {
    res.redirect('/obtener-vehiculos');
});

module.exports = router;