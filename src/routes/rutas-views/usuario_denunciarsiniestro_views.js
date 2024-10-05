const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/usuario/siniestro', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'usuario_denunciarsiniestro.ejs'));
});

module.exports = router;