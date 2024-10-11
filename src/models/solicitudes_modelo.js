const pool = require('./db'); 

class SolicitudesModelo {
    async mostrarSolicitudes() {
        const sql = `SELECT id_solicitante, nombre, tipo, email, celular, leido FROM solicitante_form WHERE archivada = FALSE`;

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
        const sql = `
        SELECT 
            solicitante_form.id_solicitante,
            solicitante_form.tipo,
            solicitante_form.patente,
            solicitante_form.anio,
            solicitante_form.nombre,
            solicitante_form.apellido,
            solicitante_form.email,
            solicitante_form.celular,
            marcas.nombre AS nombre_marca, 
            modelos.nombre AS nombre_modelo
        FROM 
            solicitante_form
        JOIN 
            marcas ON solicitante_form.id_marca = marcas.id_marcas
        JOIN 
            modelos ON solicitante_form.id_modelo = modelos.id_modelos
        WHERE 
            solicitante_form.id_solicitante = ?`;

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

    // método para archivar una solicitud
    async archivarSolicitud(id) {
        const sql = `UPDATE solicitante_form SET archivada = TRUE WHERE id_solicitante = ?`;

        return new Promise((resolve, reject) => {
            pool.query(sql, [id], (error, results) => {
                if (error) {
                    console.error("Error al archivar la solicitud:", error);
                    return resolve(false); 
                }
                resolve(true); 
            });
        });
    }

    async mostrarSolicitudesArchivadas() {
    const sql = `SELECT id_solicitante, nombre, tipo, email, celular FROM solicitante_form WHERE archivada = TRUE`;

    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results) => {
            if (error) {
                console.error("Error en la consulta de solicitudes archivadas:", error);
                return resolve([]); 
            }
            resolve(results || []); 
        });
    });
}

}

module.exports = SolicitudesModelo;