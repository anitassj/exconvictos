const conexion = require('../models/db');


const obtenerUsuarioPorDNI = async (dni) => {
    const query = 'SELECT * FROM datosPersonales WHERE dni = ?';
    const [rows] = await conexion.execute(query, [dni]);
    return rows[0];
};

module.exports = {
    obtenerUsuarioPorDNI
};
