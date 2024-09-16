const express = require('express');
const router = express.Router();
const MarcasModel = require('../models/marcas_modelo');

const marcasModel = new MarcasModel();

router.get('/obtener-marcas', async (req, res) => {
    const tipo = req.query.tipo; 

    if (!tipo) {
        return res.status(400).json({ error: 'Tipo de vehículo es requerido' });
    }

    try {
        const datos = await marcasModel.obtenerTodos(tipo);
        res.json(datos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;