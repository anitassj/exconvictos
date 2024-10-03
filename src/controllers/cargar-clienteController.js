const cargarCliente = require('../models/cargar-clienteModel');

class CargarClienteController {
    static async guardarDatos(req, res) {
        try {
            
            if (!req.body || !req.body.datosPersonales || !req.body.datosVehiculo) {
                return res.status(400).json({ error: 'Datos incompletos' });
            }

            const { nombre, apellido, dni, email, direccion, celular, ciudad, provincia } = req.body.datosPersonales;
            const { tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo } = req.body.datosVehiculo;
            
            console.log("BODY", req.body);
            console.log("FOTO", req.file);
           
            const foto = req.file ? "/" + req.file.path : null;

            const resultado = await cargarCliente.guardarDatos({
                nombre, apellido, dni, email, celular, direccion, ciudad, provincia,
                tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro,
                premio_total, suma_asegurada, uso_vehiculo, foto
            });

            res.status(200).json ({
                status: "success",
                message: "Guardado ",
            });
            console.log(resultado);
                } catch (error) {
            console.error('Error al guardar los datos:', error);
            res.status(500).json({ error: 'Error al guardar los datos' });
        }
    }
}

module.exports = CargarClienteController;
