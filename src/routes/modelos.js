const express = require('express');
const router = express.Router();
const ModelosModel = require('../models/modelos_models');

const modelosModel = new ModelosModel();

router.get('/obtener-modelos/:idMarca', async (req, res) => {
    const { idMarca } = req.params; // Obtener id_marca de los parámetros de la ruta
    const datos = await modelosModel.obtenerPorMarca(idMarca);
    res.json(datos);
});
  
module.exports = router;
