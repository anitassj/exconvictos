const express = require('express');
const path = require('path'); 
const router = express.Router();

router.get('/usuario/datospersonales', (req, res) => {

    // Llamar al modelo con los datos personales a traves de la sesison
    console.log(req.session.idUsuario);

    res.render(path.join(__dirname, '..', '..', 'views', 'usuario_datospersonales.ejs'));
});

module.exports = router;