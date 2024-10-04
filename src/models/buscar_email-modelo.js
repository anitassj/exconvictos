const conexion = require('../models/db');

const buscarEmailPorDni = async (dni) => {
    try {
        const [result] = await conexion.promise().query(
            'SELECT email FROM datosPersonales WHERE dni = ?',
            [dni]
        );
        return result;
    } catch (error) {
        throw new Error('Error en la consulta a la base de datos');
    }
};

module.exports = { buscarEmailPorDni };