const PerfilUsuario = require('../models/perfil_usuario'); // Importa el modelo

exports.mostrarPerfil = async (req, res) => {
  try {
    const idUsuario = req.params.id; // Toma el ID del usuario desde los parámetros de la URL
    const perfil = await PerfilUsuario.obtenerPorId(idUsuario); // Llama al modelo para obtener los datos del usuario
    
    res.render('perfil', { perfil }); // Renderiza la vista 'perfil.ejs' con los datos del perfil
  } catch (error) {
    res.status(500).send('Error al obtener los datos del perfil'); // Muestra un error si algo falla
  }
};
