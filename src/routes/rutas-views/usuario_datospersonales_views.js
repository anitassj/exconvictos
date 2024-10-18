const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/datos-personales', (req, res) => {
    res.redirect('/obtener-usuario');
});

module.exports = router;