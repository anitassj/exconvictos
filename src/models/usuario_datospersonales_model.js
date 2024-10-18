const conexion = require('./db');

class Usuario {
    obtenerUsuarioYCompararDni(id_usuarios) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT u.id_usuarios, u.dni, dp.dni, dp.nombre, dp.apellido, dp.email, dp.celular, dp.direccion, dp.ciudad, dp.provincia
                FROM usuarios u
                JOIN datosPersonales dp ON u.dni = dp.dni
                WHERE u.id_usuarios = ?
            `;
            
            conexion.query(sql, [id_usuarios], (err, results) => {
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

module.exports = Usuario;