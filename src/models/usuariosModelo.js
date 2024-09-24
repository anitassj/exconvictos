const conexion = require('../models/db');
const bcrypt = require('bcrypt'); //para encriptar la clave
class perfilUsuario {
  //para cuando este el panel de creacion de usuario (por la asistente)
     async crearUsuario(nombre, apellido, dni, email, clave, rol_id) {
     const hashedPassword = bcrypt.hash(clave); //encriptando la clave
     const query = `INSERT INTO usuarios (nombre, apellido, dni, email, clave, rol_id) VALUES (?, ?, ?, ?, ?, ?)`; //para insertar los usuarios clientes
     
     return new Promise((resolve, reject) => { //ejecuta la consulta sql
    conexion.query(query, [nombre, apellido, dni, email, hashedPassword, rol_id], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results.insertId); //devuelve el id el usuario creado 
        }

        })}
    )} 
}


module.exports = perfilUsuario;