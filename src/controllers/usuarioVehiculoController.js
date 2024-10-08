const UsuarioVehiculoModel = require('../models/usuarioVehiculoModel');

const UsuarioVehiculoController = {
    // Obtener vehículos por cliente
    obtenerVehiculos: async (req, res) => {
        try {
            const id_cliente = req.params.id_cliente; // Obtener el ID del cliente desde los parámetros de la solicitud
            const vehiculos = await UsuarioVehiculoModel.obtenerVehiculosPorCliente(id_cliente);
            res.render('usuario_vehiculos', { vehiculos });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener los vehículos.');
        }
    },
};

module.exports = UsuarioVehiculoController;