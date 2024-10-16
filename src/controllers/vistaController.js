const vistaClientes = require('../models/vistaModel');

// const vistaCliente = new vistaClientes();

class vistaControlador {
    async mostrarLista(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const usuarios = await vistaClientes.mostrarLista() || [];
            console.log('Datos obtenidos:', usuarios);
            res.render('vistaClientes', { usuarios }); //panel? o vistaClientes VERRR, y los datos de que for each?
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }

    async obtenerClienteID(req, res) {
        try {
            console.log('Ejecutando la consulta a la base de datos');
            const usuarios = await vistaClientes.obtenerClienteID(req.params.id);

            if (usuarios === null || usuarios === undefined) {
                res.redirect("/vistaClientes"); //seria a vistaClientes, listado general 
                return;
            }

            console.log('Datos obtenidos:', usuarios);
            res.render('perfil', { usuarios}); //comodin, del lado izquiero va el nombre de la variable 
                                                                  //que usan en la vista para referenciar los datos del cliente <% clientes.forEach
        } catch (error) {
            console.log("Error al obtener datos:", error);
            res.status(500).send("Error al obtener los datos");
        }
    }
}

module.exports = vistaControlador;