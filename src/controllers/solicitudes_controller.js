const solicitudesModelo = require('../models/solicitudes_modelo');
const SolicitudesModelo = new solicitudesModelo();

class solicitudesController {
    async mostrarDatos(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const datos = await SolicitudesModelo.mostrarSolicitudes() || [];
            console.log('Datos obtenidos:', datos);
            res.render('solicitudes/listado', { sSolicitudes: datos });
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }

    async mostrarFormulario(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const solicitud = await SolicitudesModelo.obtenerSolicitud(req.params.id);

            if (solicitud === null || solicitud === undefined) {
                res.redirect("/solicitudes");
                return;
            }

            console.log('Datos obtenidos:', solicitud);
            res.render('solicitudes/formulario', { solicitud: solicitud });
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }
}

module.exports = solicitudesController;