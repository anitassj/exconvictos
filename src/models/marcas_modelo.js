const conexion = require('../models/db');

class marcasModel {
    obtenerTodos(){
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM marcas WHERE tipo = 'Auto'`;

            conexion.query(sql, [], (err, results) => {
                try{
                    if (results.length == 0){
                        resolve(null);
                    }

                    resolve(results);
                } catch (error){
                    reject(error)
                }
            });
        });
    }
}

module.exports = marcasModel;