const cargarCliente = require('../models/cargar-clienteModel');

class cargarClienteController {
    static async guardarDatos(req, res) {
         try {
           const {nombre, apellido, dni, email, celular, direccion, ciudad, provincia, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo} = req.body;
            
           //: null para ver que exista req.file y no sea undefined
           const foto = req.file ? "/" + req.file.path : null;

           const resultado = await cargarCliente.guardarDatos({
               nombre, apellido ,dni,email,celular,direccion,ciudad,provincia,tipo_vehiculo,patente,anio,vigencia_desde,vigencia_hasta,foto,tipo_seguro,premio_total,suma_asegurada,uso_vehiculo
           });

           res.status(201).json({
               message: 'Datos guardados ',
               data: resultado 
           });
       } catch (error) {
           console.error('Error al guardar los datos:', error);
           res.status(500).json({ error: 'Error al guardar los datos' });
       }
   }
};

module.exports = cargarClienteController;
