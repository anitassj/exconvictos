const express = require('express');
const router = express.Router();
const ModelosModel = require('../models/modelos_models');

const modelosModel = new ModelosModel();

router.get('/obtener-modelos/:id_marca', async (req, res) => {
    const { id_marca } = req.params; 
    const tipo = req.query.tipo;

    // log para verificar los valores recibidos
    console.log('ID Marca:', id_marca);
    console.log('Tipo:', tipo);

    try {
        const consultaModelos = await modelosModel.obtenerPorMarcaYTipo(id_marca, tipo);

        // log de los datos obtenidos
        console.log('Datos obtenidos:', consultaModelos);
        res.json(consultaModelos);
    } catch (err) {
        // log de error 
        console.error('Error al obtener modelos:', err.message);
        res.status(500).json({ error: 'Error al obtener modelos' });
    }
});
  
module.exports = router;
