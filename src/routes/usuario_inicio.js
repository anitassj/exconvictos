const express = require('express');
const UsuarioModel = require('../models/usuario_datospersonales_model');
const router = express.Router();
const usuarioModel = new UsuarioModel();

router.get('/inicio-usuario', async (req, res) => {
    const idUsuario = req.session.idUsuario;

    if (!idUsuario) {
        return res.status(400).json({ error: 'Vuelve a iniciar sesión.' });
    }

    try {
        const datos = await usuarioModel.obtenerUsuarioYCompararDni(idUsuario);
        console.log('Datos obtenidos:', datos);

        if (datos && datos.length > 0) {
            return res.status(200).render('usuario_panel', { usuario: datos[0] });
        } else {
            return res.status(200).json({ mensaje: 'No se encontraron coincidencias de DNI entre las tablas.' });
        }

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;