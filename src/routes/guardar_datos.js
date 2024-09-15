const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const conexion = require('../models/db');

// Ruta para procesar el formulario
router.post('/guardar-datos', (req, res) => {
    const { tipo, patente, anio, id_marca, id_modelo, nombre, apellido, celular, email } = req.body;
    if (!tipo) return res.status(400).json({ error: 'El campo "tipo" es obligatorio.' });
    if (!patente) return res.status(400).json({ error: 'El campo "patente" es obligatorio.' });
    if (!anio) return res.status(400).json({ error: 'El campo "año" es obligatorio.' });
    if (!id_marca) return res.status(400).json({ error: 'El campo "marca" es obligatorio.' });
    if (!id_modelo) return res.status(400).json({ error: 'El campo "modelo" es obligatorio.' });
    if (!nombre) return res.status(400).json({ error: 'El campo "nombre" es obligatorio.' });
    if (!apellido) return res.status(400).json({ error: 'El campo "apellido" es obligatorio.' });
    if (!celular) return res.status(400).json({ error: 'El campo "celular" es obligatorio.' });
    if (!email) return res.status(400).json({ error: 'El campo "email" es obligatorio.' });
    //VALIDACION PARA QUE COMPLETEN TODOS LOS CAMPOS

    //hacemos una consulta para guardar los datos del formulario en la db, se coloca ? tantos datos haya para mas seguridad
    console.log('Datos recibidos:', req.body); //para ver q me esta llegando pq no se guarda el anio


     // Verifica que elnio se haya convertido a número
     if (isNaN(anio)) {
        return res.status(400).json({ error: 'Año inválido. Por favor ingrese un número válido para el año.' });
    }
    
    conexion.query(
         'INSERT INTO  solicitante_form (tipo, patente, anio, marca, modelo,nombre,apellido,celular,email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
         [tipo,patente,anio,id_marca, id_modelo,nombre,apellido,celular,email], 
        (error, results) => {
        if (error) { //si existe un error
            return res.status(400).json({ error: 'Error al procesar los datos.' }); //validacion
           
        } else { 
            res.send('Formulario completado con exito.');
        }
    });
});


module.exports = router;