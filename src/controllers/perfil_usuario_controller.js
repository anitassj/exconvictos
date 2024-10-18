const perfil_usuario_modelo = require('../models/perfil_usuario_modelo');

class PerfilUsuarioController {
    async mostrarPerfil(req, res) {
        try {
            const dni = req.params.dni; 
            const usuario = await perfil_usuario_modelo.obtenerUsuarioPorDNI(dni); 
            console.log('haciendo console log usuario:', usuario)
            if (usuario) {
                res.render('perfil_usuario', { usuario: usuario }); 
                console.log('imprimiendo desde el controlador', usuario);
            } else {
                res.status(404).send('Usuario no encontrado');
            }
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.status(500).send('Error al obtener los datos');
        }
    }
}

module.exports = new PerfilUsuarioController();
