// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require("body-parser");
const conexion = require('./models/db'); //importo la conexion de la db

const morgan = require('morgan');
app.use(morgan('dev'));

// middleware 
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

app.use('/public', express.static('public'));

// configuracion para usar ejs (motor de plantillas) para hacer html dinamico, necesitan instalar: npm install ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
const rutaDatos = require('./routes/guardar-datos');
const rutaPanel = require('./routes/panel');
const authRoutes = require('./routes/ruta_de_autenticacion');
const marcasRoutes = require('./routes/marcas'); 
const modelosRoutes = require('./routes/modelos'); 
const rutaPerfil = require('./routes/perfil_usuario');
const rutaPoliza = require('./routes/poliza');
const rutaUsuario = require('./routes/usuario');

app.use('/', authRoutes);
app.use('/', rutaLogin);
app.use('/', rutaInicio);
app.use('/', rutaForm);
app.use('/', rutaDatos);
app.use('/', rutaRecover);
app.use('/', rutaPanel);
app.use('/', marcasRoutes);  
app.use('/', modelosRoutes);  
app.use('/', rutaPerfil);
app.use('/', rutaPoliza);
app.use('/', rutaUsuario);

// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
})
