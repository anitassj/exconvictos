const express = require('express');
const router = express.Router();
const agregarClienteModel = require('../models/cargar-clienteModel');

router.post('/cargar_cliente', async (req, res) => {
    const { nombre, apellido, dni, email, direccion, celular, ciudad, provincia, vehiculo } = req.body;

    try {
        //inserto datos del cliente
        const cliente_id = await agregarClienteModel.insertarCliente(nombre, apellido, dni, email, direccion, celular, ciudad, provincia);

        //se usa el array echo en el front para insertar todos los vehiculos que agregue el cliente
        if (Array.isArray(vehiculo)) {
            for (const vehiculo of vehiculo) {
                await cargar-clienteModel.insertarVehiculo(cliente_id);
            }
        }

        res.status(201).json({ message: 'Cliente y vehículos agregados con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar el cliente y los vehículos.' });
    }
});
module.exports = router;