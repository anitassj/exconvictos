const conexion = require('../models/db'); // Verifica que esta ruta sea correcta

class ModelosModel {
    obtenerPorMarca(idMarca) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM modelos WHERE id_marca = ?';

            conexion.query(sql, [idMarca], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = ModelosModel;
