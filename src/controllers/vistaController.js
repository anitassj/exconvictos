const vistaClientes = require('../models/vistaModel');

const vistaCliente = new vistaClientes();

class vistaControlador {
    async mostrarLista(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const clientes = await vistaClientes.mostrarLista() || [];
            console.log('Datos obtenidos:', clientes);
            res.render('vistaClientes', { clientes }); //panel? o vistaClientes VERRR, y los datos de que for each?
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }

    async obtenerClienteID(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const clientes = await vistaClientes.obtenerClienteID(req.params.id);

            if (clientes === null || clientes === undefined) {
                res.redirect("/vistaClientes"); //seria a vistaClientes, listado general 
                return;
            }

            console.log('Datos obtenidos:', clientes);
            res.render('perfil', { clientes}); //comodin, del lado izquiero va el nombre de la variable 
                                                                  //que usan en la vista para referenciar los datos del cliente <% clientes.forEach
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }
}

module.exports = vistaControlador;