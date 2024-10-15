const db = require('./db');

async function obtenerClienteID(dni) {
    try {
        const [rows] = await db.query('SELECT * FROM datosPersonales WHERE dni = ?', [dni]);
        return rows[0]; 
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
}

module.exports = obtenerClienteID;
