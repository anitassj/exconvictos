const cargarCliente = require('../models/cargar-clienteModel');

class CargarClienteController {
    static async guardarDatos(req, res) {
        try {
           
            if (!req.body || !req.body.datosPersonales || !req.body.datosVehiculo) {
                return res.status(400).json({ error: 'Datos incompletos' });
            }

            const { nombre, apellido, dni, email, celular, direccion, ciudad, provincia } = req.body.datosPersonales;
            const { tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo } = req.body.datosVehiculo;

            const foto = req.file ? "/" + req.file.path : null;

            const resultado = await cargarCliente.guardarDatos({
                nombre, apellido, dni, email, celular, direccion, ciudad, provincia,
                tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro,
                premio_total, suma_asegurada, uso_vehiculo, foto
            });

            res.status(201).json({
                message: 'Datos guardados correctamente',
                data: resultado
            });
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            res.status(500).json({ error: 'Error al guardar los datos' });
        }
    }
}

module.exports = CargarClienteController;
