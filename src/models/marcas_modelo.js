const express = require('express');
const conexion = require('../models/db'); /*ruta en la que se llama a la conexion*/

class marcasModel {

    obtenerTodos(){
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM marcas`;

            conexion.query(sql, [], (err, results) => {
                try{
                    if (results.length == 0){
                        resolve(null);
                    }

                    resolve(results);
                } catch (error){
                    reject(error)
                }
            });
        });
    }
}

module.exports = marcasModel;