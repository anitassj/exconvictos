// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require("body-parser");
const conexion = require('./models/db'); //importo la conexion de la db

// middleware 
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

// configuracion d middleware para analizar datos del formulario
// NO TOCAR ESTA LINEA DE ABAJO, SIRVE PARA DECIR QUE LA CARPETA PUBLICA VA A SER /PUBLIC
app.use('/public', express.static('public'));//porque la carpeta public esta por encima de app.js y puede causar problemas
// no me anda -- ANITA (preg. al profe)

// configuracion para usar ejs (motor de plantillas) para hacer html dinamico, necesitan instalar: npm install ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // LO VOLVÍ A PONER YO -- ANITA

// Esta linea de abajo no se utiliza-- profe  POR QUÉ NO? NO ME ANDA SIN ESTO. ANITA (preguntarle al profe)
//app.set('views', path.join(__dirname, 'views')); 

const session = require('express-session');

//se configura la sesion
app.use(session({
    secret: 'mi_secreto_seguro',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, //cambia a true si se usa https
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// rutas
const rutaRecover = require('./routes/recover');
const rutaLogin = require('./routes/login');
const rutaInicio = require('./routes/inicio');
const rutaForm = require('./routes/solicitante_form'); 
const rutaDatos = require('./routes/guardar_datos');
const rutaPanel = require('./routes/panel');
const authRoutes = require('./routes/ruta_de_autenticacion');
const marcasRoutes = require('./routes/marcas'); 

app.use('/', authRoutes);
app.use('/', rutaLogin);
app.use('/', rutaInicio);
app.use('/', rutaForm);
app.use('/', rutaDatos);
app.use('/', rutaRecover);
app.use('/', rutaPanel);
app.use('/', marcasRoutes);  

// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
})
