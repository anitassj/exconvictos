const express = require('express');
const router = express.Router();
const PlanesModel = require('../models/planes_models'); 
const validarUsuario = require('../middleware/validarUsuario');

const planesModelInstance = new PlanesModel();

router.get('/obtener-planes', validarUsuario, async (req, res) => {
    const tipo = req.query.tipo;

    if (!tipo) {
        return res.status(400).json({ error: 'Tipo de seguro es requerido' });
    }

    try {
        const datos = await planesModelInstance.obtenerValorPorTipo(tipo);
        res.json(datos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
