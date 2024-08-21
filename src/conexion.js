//soy cat, uso la libreria mysql2 porque no me anda mysql normal, cambienlo 
//este archivo es el archivo de conexion a la base de datos
const mysql = require('mysql2');

const conexion = mysql.createConnection({ //aca creo la conexion a la base de datos, con los datos de la misma
    host: 'localhost',
    user: 'root',
    password: 's3rver2224',
    database: 'sistema_exconvictos'
});

conexion.connect((err) => { // para verificar que no haya un error, y no seguir de gusto
    if (err) {
        console.error('Error conectando a la base de datos:', err);
    } 
    else {
        console.log('Conexion a la base de datos establecida'); 
    }
});

//exportamos la conexion para utilizarla en otros modulos
module.exports = conexion;
