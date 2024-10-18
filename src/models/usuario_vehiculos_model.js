const conexion = require('./db');

class Usuario {
    obtenerUsuario(id_usuarios) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT
                    u.id_usuarios,
                    u.nombre,
                    u.dni AS usuario_dni, 
                    dp.id_cliente, 
                    dp.dni AS cliente_dni,
                    dv.id_vehiculo, 
                    dv.id_cliente, 
                    dv.tipo_vehiculo, 
                    dv.patente, 
                    dv.anio, 
                    dv.vigencia_desde, 
                    dv.vigencia_hasta, 
                    dv.tipo_seguro,
                    dv.premio_total, 
                    dv.suma_asegurada, 
                    dv.uso_vehiculo
                FROM usuarios u
                JOIN datosPersonales dp ON u.dni = dp.dni
                JOIN datosVehiculo dv ON dp.id_cliente = dv.id_cliente
                WHERE u.id_usuarios = ?;
            `;
            
            conexion.query(sql, [id_usuarios], (err, results) => {
                if (err) {
                    return reject(err);
                }

                if (results.length === 0) {
                    return resolve([]);
                }

                resolve(results);
            });
        });
    }
}

module.exports = Usuario;