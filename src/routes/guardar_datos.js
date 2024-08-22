const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const conexion = require('../models/db');

// Ruta para procesar el formulario
router.post('/guardar_datos', (req, res) => {
    const { nombre, apellido, dni, fecha_nac, ciudad_natal, ciudad_prox, num_causa, abogado, juzgado } = req.body;

    //hacemos una consulta para guardar los datos del formulario en la db, se coloca ? tantos datos haya para mas seguridad
    conexion.query(
        'INSERT INTO exconvictos_datos (nombre, apellido, dni, fecha_nac, ciudad_natal, ciudad_prox, num_causa, abogado, juzgado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellido, dni, fecha_nac, ciudad_natal, ciudad_prox, num_causa, abogado, juzgado], 
        (error, results) => {
        if (error) { //si existe un error
            console.error('Error al guardar los datos:', error);
            res.send('Error al guardar los datos.'); //envio un msj de error a la pagina si no se guardaron
            return;
        }

        res.redirect('/'); //para redirigir a la pagina anterior cuando se guarden con exito (podemos cambiarlo por algun mensaje o algo a futuro)
    });
});


module.exports = router;