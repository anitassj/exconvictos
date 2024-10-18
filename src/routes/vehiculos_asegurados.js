const express = require('express');
const UsuarioModel = require('../models/usuario_vehiculos_model');
const router = express.Router();
const usuarioModel = new UsuarioModel();

router.get('/obtener-vehiculos', async (req, res) => {
    const idUsuario = req.session.idUsuario;

    if (!idUsuario) {
        return res.status(400).json({ error: 'Vuelve a iniciar sesión.' });
    }

    try {
        const datos = await usuarioModel.obtenerUsuario(idUsuario);
        console.log('Datos obtenidos:', datos);

        if (datos && datos.length > 0) {
            const usuario = datos[0];
            usuario.vigencia_desde = formatDate(usuario.vigencia_desde);
            usuario.vigencia_hasta = formatDate(usuario.vigencia_hasta);

            return res.status(200).render('usuario_vehiculos', { usuario: usuario });
        } else {
            return res.status(200).json({ mensaje: 'No se encontraron coincidencias de DNI entre las tablas.' });
        }

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

module.exports = router;