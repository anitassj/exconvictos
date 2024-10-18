const conexion = require('../models/db');

class PreciosModel {
    obtenerPrecioPorPlan(id_planes) {
        return new Promise((resolve, reject) => {
            const sql = `
                    SELECT precio
                    FROM planes_precios
                    WHERE id_planes = ?
            ` ;

            conexion.query(sql, [id_planes], (err, results) => {
                if (err) {
                    console.error('Error al obtener precios:', err); 
                    reject(err);
                } else {
                    console.log('Resultados de la consulta:', results);
                    resolve(results);
                }
            });
        });
    }
}

module.exports = PreciosModel;
