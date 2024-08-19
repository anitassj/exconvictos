// configurar el servidor web con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// middleware 
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// rutas
const rutaLogin = require('./routes/login');
const rutaInicio = require('./routes/index.html');

app.use('/', rutaLogin);
app.use('/', rutaInicio);

// levantar el servidor 
app.listen(port, () => {
    console.log(`El servidor corre en el puerto ${port}`);
});
