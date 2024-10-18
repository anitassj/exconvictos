const express = require('express');
const router = express.Router();
const PreciosModel = require('../models/preciosModelos_models');
//const validarUsuario = require('../middleware/validarUsuario');

const PreciosModel = new PreciosModel();

router.get('/obtener-modelos/:id_marca',  async (req, res) => {
    const { id_planes } = req.params; 
    const tipo = req.query.tipo;

    // log para verificar los valores recibidos
    console.log('ID Marca:', id_planes);
    console.log('Tipo:', tipo);

    try {
        const consultaPrecios = await PreciosModel.obtenerValorPorPlan(id_planes, tipo);

        // log de los datos obtenidos
        console.log('Datos obtenidos:', consultaPrecios );
        res.json(consultaPrecios );
    } catch (err) {
        // log de error 
        console.error('Error al obtener precios:', err.message);
        res.status(500).json({ error: 'Error al obtener precios' });
    }
});
  
module.exports = router;
