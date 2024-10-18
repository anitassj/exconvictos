const conexion = require('./db');

class planesModel {

    obtenerValorPorTipo(tipo) {
        return new Promise((resolve,reject) => {
            const sql = `SELECT id_planes, tipo FROM planes`;
    
        conexion.query(sql, [tipo], (err, results) => {
            if(err) {
                reject(err);
            }
            else {
                //console.log('Planes: ',results);
                resolve(results);
            }
        })
    })
    };
};

module.exports = planesModel;