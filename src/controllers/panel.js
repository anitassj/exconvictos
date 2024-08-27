class PanelController { //clase que actúa como controlador
//los controladores manejan las solicitudes (requests) de los usuarios y
// devuelven las respuestas (responses)
	mostrarListado (req, res) { //método de la clase que es una función. recibe dos parámetros req y res
		res.render('panel/listado'); //para randerizar una vista; cuando se llama a un metodo se genera una pagina html usando una plantilla llamada "panel/listado"
	}

}

module.exports = PanelController;
//exporta la clase PanelController para que pueda ser usada en otras partes del codigo.

//este codigo tiene un metodo que muestra una vista llamada "listado" cuando se recibe una solicitud.
//se utilizan controladores para organizar la logica de manejo de req y res.