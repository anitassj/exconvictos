// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require("body-parser");
const conexion = require('./models/db'); //importo la conexion de la db
const mysql = require('mysql2');
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

// rutas de vistas (FRONTEND) -----------------------------
const rutaCargaCliente = require('./routes/rutas-views/cargar_usuario_views');
const rutaInicio = require('./routes/rutas-views/inicio_views');
const rutaLogin = require('./routes/rutas-views/login_views');
const rutaPerfil = require('./routes/rutas-views/perfil_usuario_views');
const rutaRecover = require('./routes/rutas-views/recover_views');
const rutaForm = require('./routes/rutas-views/solicitante_form_views'); 
const rutaUsuarioVehiculos = require('./routes/rutas-views/usuario_vehiculos_views');
const rutaPoliza = require('./routes/rutas-views/poliza_views');
const rutaVehiculo = require('./routes/rutas-views/ver_vehiculos_views');
const rutaCrearUsuario = require('./routes/rutas-views/crear_usuario_views');
const rutaCoberturas = require ('./routes/rutas-views/cobeturas-views')
const rutaUsuarioDatosPers = require('./routes/rutas-views/usuario_datospersonales_views');
const rutaUsuarioDenunciarSin = require('./routes/rutas-views/usuario_denunciarsiniestro_views');

app.use('/', rutaCargaCliente);
app.use('/', rutaInicio);
app.use('/', rutaLogin);
app.use('/', rutaPerfil);
app.use('/', rutaRecover);
app.use('/', rutaForm);
app.use('/', rutaUsuarioVehiculos);
app.use('/', rutaPoliza);
app.use('/', rutaVehiculo);
app.use('/', rutaCrearUsuario);
app.use('/', rutaCoberturas);
app.use('/', rutaUsuarioDatosPers);
app.use('/', rutaUsuarioDenunciarSin);

// rutas API (BACKEND) ------------------------------------
const rutaDatos = require('./routes/guardar-datos');
const rutaPanel = require('./routes/panel');
const authRoutes = require('./routes/ruta_de_autenticacion');
const marcasRoutes = require('./routes/marcas'); 
const modelosRoutes = require('./routes/modelos'); 
const cargarCliente = require('./routes/cargar-cliente');
const rutaSolicitudes = require('./routes/solicitudes_ruta');
const rutaVista = require('./routes/vista_ruta');
const rutaBuscarEmail = require('./routes/buscar_email-ruta');
const rutaCrearUsuarioEmail = require('./routes/crear_cliente-ruta');
const rutaUsuarioVehiculoBack = require('./routes/usuarioVehiculoRuta');

app.use('/', authRoutes);
app.use('/', rutaDatos);
app.use('/', rutaPanel);
app.use('/', marcasRoutes);  
app.use('/', modelosRoutes);  
app.use('/', cargarCliente);
app.use('/', rutaSolicitudes);
app.use('/', rutaVista);
app.use('/api', rutaCrearUsuarioEmail);
app.use('/api', rutaBuscarEmail);
app.use('/', rutaUsuarioVehiculoBack);


// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
})
