const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/perfil_usuario', (req, res) => {
    res.render(path.join(__dirname, '..', '..', 'views', 'perfil.ejs'));
});

module.exports = router;