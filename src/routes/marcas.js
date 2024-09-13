const express = require('express');
const router = express.Router();
const MarcasModel = require('../models/marcas_modelo');

const marcasModel = new MarcasModel();

router.get('/obtener-marcas', async (req, res) => {
  const datos = await marcasModel.obtenerTodos();
  res.json(datos);
});
  
module.exports = router;

