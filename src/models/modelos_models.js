// modelo para interactuar con la tabla 'modelos' de la base de datos 
const conexion = require('../models/db');

class ModelosModel {
    obtenerPorMarca(id_marca) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM modelos WHERE id_marca = ?';

            conexion.query(sql, [id_marca], (err, results) => {
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
