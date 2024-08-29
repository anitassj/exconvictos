const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const conexion = require('../models/db');

// Ruta para procesar el formulario
router.post('/guardar-datos', (req, res) => {
    const { tipo, patente, anio, marca, modelo, nombre, apellido, celular, email } = req.body;
    //hacemos una consulta para guardar los datos del formulario en la db, se coloca ? tantos datos haya para mas seguridad
    conexion.query(
         'INSERT INTO  solicitante_form (tipo, patente, anio, marca, modelo,nombre,apellido,email,celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
         [tipo,patente,anio,marca,modelo,nombre,apellido,email,celular],
        (error, results) => {
        if (error) { //si existe un error
            console.error('Error al guardar los datos:', error);
            res.send('Error al guardar los datos.'); //envio un msj de error a la pagina si no se guardaron
            return;
        } else { 
            res.send('GUARDADO CON EXITO.');
        }
    });
});


module.exports = router;