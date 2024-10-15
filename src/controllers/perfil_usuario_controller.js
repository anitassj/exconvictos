const vistaClientes = require('../models/perfil_usuario_modelo'); 

async function obtenerDatos(req, res) {
    const dni = req.params.dni;
    try {
        
        const cliente = await vistaClientes.obtenerClienteID(dni); 

        if (!cliente) {
            return res.status(404).send('Cliente no encontrado');
        }
        res.render('perfil', { perfil: cliente });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return res.status(500).send('Error al obtener los datos');
    }
}


module.exports = obtenerDatos;
