const conexion = require('./db');

class SolicitanteModelo {
    static async guardarDatos(solicitanteForm) {
        const { tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular } = solicitanteForm;
        const sql = `
            INSERT INTO solicitante_form 
            (tipo, patente, anio, id_marca, id_modelo, nombre, apellido, email, celular) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        try {
            const [results] = await conexion.promise().query(sql, [tipo, patente, anio, idMarca, idModelo, nombre, apellido, email, celular]);
            return results;
        } catch (error) {
            console.error('Error en la consulta:', error);
            throw error;
        }
    }
}

module.exports = SolicitanteModelo;
