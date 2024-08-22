const mysql = require('mysql2'); //soy cat,yo uso mysql2 porque mysql no me funciona. cualquier cosa instalen o cambien la configuracion!

//creo la conexion a la db

const conexion = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_exconvictos'
});

//codigo para ver si se conecto correctamente a la db.
conexion.connect((err) => { 
    if(!err) { console.log('Conexion creada con exito');
    }
    else {
        console.log('Hubo un error en la conexion:', err.message);
    }
});

//exportamos la db
module.exports = conexion;
