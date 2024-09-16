const conexion = require('../models/db');

class marcasModel {
    obtenerTodos(tipo){
        return new Promise((resolve, reject) => {

            const sql = `SELECT id_marcas, nombre FROM marcas WHERE tipo = ?`;
            conexion.query(sql, [tipo], (err, results) => {
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