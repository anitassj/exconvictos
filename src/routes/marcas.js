const express = require('express');
const router = express.Router();
const MarcasModel = require('../models/marcas_modelo');
const validarUsuario = require('../middleware/validarUsuario');

const marcasModel = new MarcasModel();

router.get('/obtener-marcas', validarUsuario, async (req, res) => {
    const tipo = req.query.tipo; 

    // console.log('tipo recibido:', tipo);

    if (!tipo) {
        return res.status(400).json({ error: 'Tipo de vehículo es requerido' });
    }

    try {
        const datos = await marcasModel.obtenerTodos(tipo);
        // console.log('datos obtenidos:', datos);
        res.json(datos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;