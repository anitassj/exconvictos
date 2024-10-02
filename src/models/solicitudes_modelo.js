const pool = require('./db'); // Asegúrate de que el pool esté correctamente configurado

class solicitudesModelo {
    async mostrarSolicitudes() {
        const sql = `SELECT 
                        s.id_solicitante, 
                        s.nombre,
                        v.tipo_vehiculo,
                        s.email, 
                        s.celular 
                    FROM solicitante_form s
                    LEFT JOIN vehiculo v ON v.idPerfilUsuario = s.id_solicitante`;
        
        //promesa para poder usar `await` en el controlador
        return new Promise((resolve, reject) => {
            pool.query(sql, (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve([]); // devuelve un array vacío en caso de error
                }
                resolve(results || []);
            });
        });
    }   
    
    async obtenerSolicitud(id) {
        const sql = `SELECT * FROM solicitante_form WHERE id_solicitante = ?`;
        
        //promesa para poder usar `await` en el controlador
        return new Promise((resolve, reject) => {
            pool.query(sql, [id], (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve(null); // devuelve un array vacío en caso de error
                }
                resolve(results[0]);
            });
        });
    } 
}

module.exports = solicitudesModelo;