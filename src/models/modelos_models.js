// modelo para interactuar con la tabla 'modelos' de la base de datos 
const conexion = require('../models/db');

class ModelosModel {
    obtenerPorMarcaYTipo(id_marca, tipo) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT modelos.id_modelos, modelos.nombre
                FROM modelos
                INNER JOIN marcas ON modelos.id_marca = marcas.id_marcas
                WHERE modelos.id_marcas = ? AND marcas.tipo = ?
            `;

            conexion.query(sql, [id_marca, tipo], (err, results) => {
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
