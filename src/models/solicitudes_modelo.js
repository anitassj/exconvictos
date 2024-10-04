const pool = require('./db'); 

class solicitudesModelo {
    async mostrarSolicitudes() {
        const sql = `SELECT 
                s.id_solicitante, 
                s.nombre,
                v.tipo_vehiculo,
                s.email, 
                s.celular,
                s.leido 
            FROM solicitante_form s
            LEFT JOIN datosVehiculo v ON v.id_cliente = s.id_solicitante`;
    
        return new Promise((resolve, reject) => {
            pool.query(sql, (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve([]); 
                }
                resolve(results || []);
            });
        });
    }      
    
    async obtenerSolicitud(id) {
        const sql = `SELECT * FROM solicitante_form WHERE id_solicitante = ?`;
        
        return new Promise((resolve, reject) => {
            pool.query(sql, [id], (error, results) => {
                if (error) {
                    console.error("Error en la consulta de solicitudes:", error);
                    return resolve(null); 
                }
                resolve(results[0]);
            });
        });
    } 

    async marcarLeido(id) {
        const sql = `UPDATE solicitante_form SET leido = TRUE WHERE id_solicitante = ?`;
        
        return new Promise((resolve, reject) => {
            pool.query(sql, [id], (error, results) => {
                if (error) {
                    console.error("Error al marcar la solicitud como leída:", error);
                    return resolve(false); 
                }
                resolve(true); 
            });
        });
    }
    
}

module.exports = solicitudesModelo;