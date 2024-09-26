const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/usuario', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'usuario.ejs'));
});

module.exports = router;