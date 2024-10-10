//usuarioDatosPersModel.js
const conexion = require('./db');

const obtenerDatosPersonales = (callback) => {
    const datosPersonales = 'SELECT * FROM datosPersonales';
    conexion.query(datosPersonales, (error, datos) => {
        if(error) {
            return callback(error, null);
        } else {
            return callback(null, datos);
        }
    });
};

module.exports = { obtenerDatosPersonales };