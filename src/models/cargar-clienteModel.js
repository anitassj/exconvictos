const conexion = require('../models/db'); 

class CargarCliente {
    static async guardarDatos(clienteData) {
        const { nombre, apellido, dni, email, celular, direccion, ciudad, provincia } = clienteData;
        const { tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo } = clienteData;

        try {
            const sql = `
                INSERT INTO datosPersonales(nombre, apellido, dni, email, celular, direccion, ciudad, provincia) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const [results] = await conexion.promise().query(sql, [nombre, apellido, dni, email, celular, direccion, ciudad, provincia]);

            const id_cliente = results.insertId;

            const sql2 = `
                INSERT INTO datosVehiculo(id_cliente, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            const [results2] = await conexion.promise().query(sql2, [id_cliente, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo]);

            return { clienteDatos: results, vehiculoDatos: results2 };
        } catch (error) {
            console.error('Error en la consulta:', error);
            throw error; 
        }
    }
}

module.exports = CargarCliente;
