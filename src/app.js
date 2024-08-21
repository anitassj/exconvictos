// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const bodyParser = require("body-parser");

const conexion = require("./conexion"); //requerimos la ruta para manejar la conexion

// middleware 
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

//bodyparser es un middl que permite acceder y procesar datos enviados por form html
app.use(bodyParser.json());

//analiza datos codificados por url
app.use(bodyParser.urlencoded({extended: false}));

//para servir archivos estaticos desde la carpeta public
app.use('/public', express.static(path.join(__dirname, "public")));

//para establecer ejs como el motor de plantillas ,INSTALAR NPM INSTALL EJS
app.set("view engine", "ejs");
app.set('views',path.join(__dirname, 'views'));

// rutas
const rutaLogin = require('./routes/login');

const rutaInicio = require('./routes/inicio');
const rutaForm = require('./routes/form');

app.use('/', rutaLogin);
app.use('/', rutaInicio);
app.use('/', rutaForm);

//DEFINIENDO LA RUTA INICIO!!!!! IMPORTANTE
/*app.get("/", (req, res) => {
    res.render("inicio", {
      rutaActual: "/",
    });
  });*/
  

// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
})
