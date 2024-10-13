const express = require('express');
const router = express.Router();
const ModelosAniosModel = require('../models/modeloanios_models');
const validarUsuario = require('../middleware/validarUsuario');

const ModelosAniosMod = new ModelosAniosModel();

router.get('/obtener-anios/:id_modelos', async (req, res) => {
    const { id_modelos } = req.params;
    try {
        const anios = await ModelosAniosMod.obtenerAniosPorModelo(id_modelos);
        res.json(anios);
    } catch (error) {
        console.error('Error al obtener años:', error);
        res.status(500).send('Error en el servidor');
    }
});
  
module.exports = router;
