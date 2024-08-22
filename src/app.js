// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3006;

// middleware 
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

// configuracion d middleware para analizar datos del formulario
/*app.use('/public', express.static("../public"));*/
app.use('/public', express.static(path.join(__dirname, 'public')));//porque la carpeta public esta por encima de app.js y puede causar problemas
// configuracion para usar ejs (motor de plantillas) para hacer html dinamico, necesitan instalar: npm install ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// rutas
const rutaLogin = require('./routes/login');
const rutaInicio = require('./routes/index');
const rutaForm = require('./routes/formulario');
const conexion = require('./models/db'); //importo la conexion de la db
const rutaDatos = require('./routes/guardar_datos');
app.use('/', rutaLogin);
app.use('/', rutaInicio);
app.use('/', rutaForm);
app.use('/', rutaDatos);
// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
});
