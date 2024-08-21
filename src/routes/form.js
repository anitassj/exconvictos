//backend del formulario de datos del preso
const express = require('express');
const router = express.Router();
const db = require('../conexion'); //para importar la conexion a la db
const path = require('path'); 

router.get('/form', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'form.ejs'));
});

//ruta formulario 
// app.get("/form", (req, res) => {
//     res.render("pages/form", {
//       rutaActual: "/form",
//     });
// });
    router.post("/procesar-formulario", async (req, res) => {
        console.log(req.body);
        // Verificar campos vacíos
        for (const campo in req.body) {
          if (!req.body[campo]) {
            res.send(`Error: El campo ${campo} está vacío.`);
            return;
          }
        }
      
        /**
         * Desestructuración de los datos del body
         */
        const { nombre, apellido, dni, fecha_nac, ciudad_natal, ciudad_prox, num_causa, abogado, juzgado } = req.body;
        try {
          // Realizar la inserción en la base de datos
          const query =
            "INSERT INTO exconvictos_datos (nombre, apellido, dni, fecha_nac, ciudad_natal, ciudad_prox, num_causa, abogado, juzgado) VALUES (?, ?, ?, ?)";
          await connection.execute(query, [
            nombre, 
            apellido, 
            dni, 
            fecha_nac, 
            ciudad_natal, 
            ciudad_prox, 
            abogado, 
            juzgado
          ]);
      
          res.render("inicio", {
            rutaActual: "/",
          });
          //res.send(`¡Formulario procesado correctamente!`);
        } catch (error) {
          console.error("Error al insertar en la base de datos: ", error);
          console.log(error); // Agregar esta línea para imprimir el error completo en la consola
          res.send("Error al procesar el formulario");
        }
      });

      module.exports = router;