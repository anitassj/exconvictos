const conexion = require('../models/db');

class ModelosAniosModel {
    obtenerAniosPorModelo(id_modelos) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT anio
                FROM modelos_anios
                WHERE id_modelos = ?
            `;

            conexion.query(sql, [id_modelos], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Anios disponibles para el modelo', results);
                    resolve(results);
                }
            });
        });
    }
}

module.exports = ModelosAniosModel;