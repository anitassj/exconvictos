//usuarioDatosPersModel.js
const db = require('./db');

class DatosPersonalesModel {
    obtenerTodos(id_cliente) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM datosPersonales WHERE id_cliente = ?`;
            db.query(sql, [id_cliente], (err, results) => {
                if (err) {
                    return reject(err);
                }
                if (results.length === 0) {
                    return resolve(null);
                }
                resolve(results[0]);
            });
        });
    }
}

module.exports = new DatosPersonalesModel();