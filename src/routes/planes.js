const express = require('express');
const router = express.Router();
const PlanesModel = require('../models/planes_models'); 
//const validarUsuario = require('../middleware/validarUsuario');

const planesModelInstance = new PlanesModel();

router.get('/obtener-planes', async (req, res) => {
    try {
        const datos = await planesModelInstance.obtenerValorPorTipo(); 
        res.json(datos); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
