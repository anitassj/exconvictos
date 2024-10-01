const express = require('express');
const router = express.Router();
const UsuarioModel = require('../models/usuario_modelo'); // ajusta la ruta según la estructura del proyecto

const usuarioModel = new UsuarioModel();

router.get('/login', (req, res) => {
    res.render('login', { error: null }); // Se pasa el error aunque no haya para que el login funcione correctamente y asi evitar el ReferenceError
});

router.post('/ruta_de_autenticacion', async (req, res) => { /*cambio de ruta*/
    const { email, clave } = req.body;

    console.log('Datos recibidos en el POST:', { email, clave }); /*para ver que datos estoy recibiendo*/
    try {
        const usuario = await usuarioModel.validarUsuario(email, clave);

        if (usuario) {
            // si el usuario es válido, se establece la sesión y se redirige a la página principal
            req.session.idUsuario = usuario.id_usuarios; // 'id_usuarios' es el campo que viene de la consulta SQL
            req.session.usuario = usuario; // Esto guarda toda la información del usuario si lo necesitas
            
            res.redirect('/panel'); // Redirige a la página principal
        } else {
            // si las credenciales son inválidas, redirige al login con un mensaje de error
            res.render('login', {error: 'Usuario y/o contraseña incorrectos'});
            
        }

        req.session.idUsuario = usuario.id;
        console.log("Sesión iniciada para el usuario:", req.session);
    } catch (error) {
        console.error('Error al validar usuario:', error);
        res.render('login', {error: 'Ocurrió un error inesperado'});
    }
});

module.exports = router;
