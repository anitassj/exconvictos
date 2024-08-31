const conexion = require("../database/datos_usuarios"); //el código está importando la conexión a la base de datos desde un archivo llamado db que se encuentra en la carpeta database. esta conexion va a interactuar con la base de datos

class UsuarioModel {

	validarUsuario(email, clave) {
		return new Promise((resolve, reject) => {
			let sql = `SELECT * FROM datos_usuarios WHERE email = ? AND clave = ?`;
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