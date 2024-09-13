const conexion = require('../models/db');

class marcasModel {
    obtenerTodos(tipo){
        return new Promise((resolve, reject) => {
            tipo = conexion.escape(tipo);

            const sql = `SELECT * FROM marcas WHERE tipo = ${tipo}`;

            conexion.query(sql, [], (err, results) => {
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

module.exports = marcasModel;