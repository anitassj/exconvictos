const conexion = require('./db');

class vistaClientes {
    
    static async mostrarLista() {

            const sql = `SELECT dp.id_cliente, dp.nombre, dp.email, dp.celular, dv.tipo_vehiculo
                        FROM datosPersonales dp
                        LEFT JOIN datosVehiculo dv ON dp.id_cliente = dv.id_cliente`;


        return new Promise((resolve, reject) => {
            conexion.query(sql, (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve([]); // devuelve un array vacío en caso de error
                }
                resolve(results || []);
            });
        })
    }

    async obtenerClienteID(id) {
        const sql = `SELECT *
                    FROM datosPersonales WHERE id_cliente = ?`;
        
        //promesa para poder usar `await` en el controlador
        return new Promise((resolve, reject) => {
            conexion.query(sql, [id], (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve(null); // devuelve un array vacío en caso de error
                }
                resolve(results[0]);
            });
        });
    } 
};

module.exports = vistaClientes;