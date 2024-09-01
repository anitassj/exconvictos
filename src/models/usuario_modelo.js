const express = require('express');
const conexion = require('../models/db'); /*ESTABA MAL LA RUTA DE LA DB, NO TENES QUE LLAMAR A LA TABLA CLARI TENES Q LLAMAR A LA CONEXION*/
class UsuarioModel {

	validarUsuario(email, clave) {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM datos_usuarios WHERE email = ? AND clave = ?`;
			
			console.log('Ejecutando consulta SQL:', sql); /*para ver si se esta ejecutando la consulta*/
            console.log('Con parámetros:', [email, clave]); /*y ver los parametros q esta recibiendo*/

			conexion.query(sql, [email, clave], (err, results) => { //el código ejecuta la consulta SQL contra la base de datos utilizando la conexión conx. los valores email y password se pasan como parámetros para evitar inyecciones sql.
				try {

					if (results.length == 0) {
						resolve(null);
					}

					resolve(results[0]);
				} catch (error) {
					reject(error)
				}

			});
		});
	}

}

module.exports = UsuarioModel;