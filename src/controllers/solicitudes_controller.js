const SolicitudesModelo = require('../models/solicitudes_modelo');
const solicitudesModelo = new SolicitudesModelo();

class SolicitudesController {
    async mostrarDatos(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const datos = await solicitudesModelo.mostrarSolicitudes() || [];
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
            const solicitud = await solicitudesModelo.obtenerSolicitud(req.params.id);

            if (!solicitud) {
                res.redirect("/solicitudes");
                return;
            }

            console.log('Datos obtenidos:', solicitud);
            res.render('solicitudes/formulario', { solicitud });
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }

    async marcarComoLeido(req, res) {
        try {
            const id = req.params.id;
            const success = await solicitudesModelo.marcarLeido(id);
    
            if (success) {
                res.status(200).send({ message: "Solicitud marcada como leída", id });
            } else {
                res.status(500).send("Error al marcar la solicitud como leída");
            }
        } catch (error) {
            console.log("Error al marcar como leído:", error);
            res.status(500).send("Error al marcar la solicitud como leída");
        }
    }

    async archivarSolicitud(req, res) {
        const { id } = req.params;
    
        try {
            const success = await solicitudesModelo.archivarSolicitud(id);
    
            if (success) {
                res.json({ success: true });
            } else {
                res.status(500).json({ success: false });
            }
        } catch (error) {
            console.error('Error al archivar la solicitud:', error);
            res.status(500).json({ success: false });
        }
    }    

    async desarchivarSolicitud(req, res) {
        try {
            const id = req.params.id;
            const success = await solicitudesModelo.desarchivarSolicitud(id);
    
            if (success) {
                res.status(200).send({ message: "Solicitud desarchivada correctamente", id });
            } else {
                res.status(500).send("Error al desarchivar la solicitud");
            }
        } catch (error) {
            console.log("Error al desarchivar la solicitud:", error);
            res.status(500).send("Error al desarchivar la solicitud");
        }
    }
    

    async mostrarSolicitudesArchivadas(req, res) {
        console.log('Ejecutando mostrarSolicitudesArchivadas'); 
        try {
            console.log('Ejecutando la consulta de solicitudes archivadas');
            const datosArchivados = await solicitudesModelo.mostrarSolicitudesArchivadas() || [];
            console.log('Solicitudes archivadas obtenidas:', datosArchivados);
            res.render('solicitudes/listado_archivado', { sSolicitudesArchivadas: datosArchivados });
        } catch (error) {
            console.log("Error al obtener solicitudes archivadas:", error);
            res.status(500).send("Error al obtener las solicitudes archivadas");
        }
    }
    
}

module.exports = SolicitudesController;
