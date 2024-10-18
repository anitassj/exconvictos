const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/datos-personales', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'usuario_datospersonales.ejs'));
});

module.exports = router;