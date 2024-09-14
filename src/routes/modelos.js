// ruta para obtener modelos según el id de la marca seleccionada
const express = require('express');
const router = express.Router();
const ModelosModel = require('../models/modelos_models');

const modelosModel = new ModelosModel();

router.get('/obtener-modelos/:id_marca', async (req, res) => {
    const { id_marca } = req.params; 
    const tipo = req.query.tipo;

    const consultaModelos = await modelosModel.obtenerPorMarcaYTipo(id_marca, tipo);
    res.json(consultaModelos);
});
  
module.exports = router;