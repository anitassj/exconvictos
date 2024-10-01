const conexion = require('../models/db');

class cargarCliente {

    static async guardarDatos(cargarCliente) {
        const {nombre, apellido, dni, email, celular, direccion, ciudad, provincia, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo } = cargarCliente;
        
        try {
        const sql = `
            INSERT INTO datosPersonales(nombre, apellido, dni, email, celular, direccion, ciudad, provincia) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const [results]= await conexion.promise().query(sql, [nombre, apellido, dni, email, celular, direccion, ciudad, provincia]);
        //para obtener el ID del cliente insertado, para futuras consultas
        const id_cliente = results.insertId;
        
        const sql2 = `INSERT INTO datosVehiculo(id_cliente, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        const [results2]= await conexion.promise().query(sql2, [id_cliente, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, foto, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo]);
       
        //devuelve un objeto con los datos resultados de cada consulta
        return { clienteDatos: results, vehiculoDatos: results2 };

        } catch (error) {
            console.error('error en la consulta:', error);
            throw error;
        }
    }
};

module.exports = cargarCliente;