const express = require('express');
const router = express.Router();

const validarUsuario = require("../middleware/validarUsuario");

const controllerPanel = require("../controllers/panel");
const panelController = new controllerPanel();

router.get('/panel', validarUsuario, panelController.mostrarListado);

router.get('/cerrar-sesion', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error al cerrar sesión:', err); 
            return res.status(500).send('Error al cerrar sesión');
        }

        res.redirect('/login');
    });
});

module.exports = router;