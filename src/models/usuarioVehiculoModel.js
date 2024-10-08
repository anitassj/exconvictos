const db = require('./db');

const UsuarioVehiculoModel = {
    obtenerVehiculosPorCliente: async (id_cliente) => {
        const query = 'SELECT id_cliente, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo FROM datosVehiculo WHERE id_cliente = ?';
        const [rows] = await db.query(query, [id_cliente]);
        return rows;
    },
};

module.exports = UsuarioVehiculoModel;