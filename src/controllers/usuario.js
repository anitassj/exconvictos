const modelUsuario = require("../models/usuario"); /*se importa un módulo llamado usuario desde la carpeta models
que contiene la logica para interactuar con la base de datos de usuarios*/
const usuarioModel = new modelUsuario();
/*permite utilizar los métodos definidos en el modelo "usuario" */

class UsuarioController { //maneja la lógica de la aplicación relacionada con los usuarios

	mostrarFormulario (req, res) { //metodo que muestra el formulario de inicio de sesion, renderizando una vista llamada "panel/login"
		res.render('panel/login');
	}

	async validarFormulario (req, res) { //recibe los datos del formulario

		// Para recibir datos yo puedo utilizar:
		// req.query -> recibo los datos por url (normalmente GET)
		// req.params -> recibo los datos por comodin 
		// req.body -> recibo los datos por body (normalmente POST Y PUT)
		const email = req.body.email; //obtiene los datos enviados a traves del formulario, especificamente el email y contraseña
		const password = req.body.password;

		const usuario = await usuarioModel.validarUsuario(email, password);
		//llama al metodo validarUsuario del modelo usuarioModel para verificar si las credenciales son correctas.
		
		if (usuario != null) { //devuelve usuario si las credenciales son validas o null si no lo son
			// Si las credenciales son válidas (usuario != null)...
			req.session.idUsuario = usuario.id; //...se guarda el ID del usuario...
			req.session.idProyecto = usuario.id_proyecto;//... y el ID del proyecto asociado (usuario.id_proyecto)...
			console.log(req.session);//... en la sesión (req.session)
			res.json({
				"idUsuario": usuario.id,
				"error": 0 //Si la validación es exitosa, responde con un objeto JSON que incluye el ID del usuario y un código de error 0.
			});


		} else {
			res.json({
				"error": 1, //Si la validación falla, responde con un código de error 1
			});
		}
	}
}

module.exports = UsuarioController;
//exporta la clase UsuarioController para que pueda ser utilizada en otras partes de la aplicacion

/*el controlador maneja la lógica relacionada con los usuarios, 
como mostrar formularios de inicio de sesión y validar las credenciales
de los usuarios*/

/*este controlador maneja la presentación del formulario de inicio de sesión y la validación de las
credenciales enviadas por el usuario. Si las credenciales son correctas, guarda la información relevante
en la sesión del usuario y responde con un JSON indicando el éxito; si no, responde con un error. */