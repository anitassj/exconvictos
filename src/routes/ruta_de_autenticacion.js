const express = require('express');
const router = express.Router();
const UsuarioModel = require('../models/usuario_modelo'); // ajusta la ruta según la estructura del proyecto

const usuarioModel = new UsuarioModel();

router.post('/login', async (req, res) => {
    const { email, clave } = req.body;

    try {
        const usuario = await usuarioModel.validarUsuario(email, clave);

        if (usuario) {
            // si el usuario es válido, se establece la sesión y se redirige a la página principal
            req.session.usuario = usuario;
            res.redirect('/panel'); // redirige a la página principal
        } else {
            // si las credenciales son inválidas, redirige al login con un mensaje de error
            res.redirect('/panel?error=Credenciales inválidas');
        }
    } catch (error) {
        console.error('Error al validar usuario:', error);
        res.redirect('/panel?error=Ocurrió un error inesperado');
    }
});

module.exports = router;
