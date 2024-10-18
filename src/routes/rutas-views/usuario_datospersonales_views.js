const express = require('express');
const path = require('path'); 
const router = express.Router();

/* ahora, las solicitudes a /usuario/datos-personales será redirigida a
 /obtener-usuario, donde está la lógica para mostrar los datos
*/ 

router.get('/datos-personales', (req, res) => {
    res.redirect('/obtener-usuario');
});

// esto era lo que tenias antes, que hacia q se cargue la ruta /datos-personales 
// renderizaba bien el ejs pero nunca se conectaba con /obtener-usuario (datosperonsales.js)
// router.get('/datos-personales', (req, res) => {
//     res.render(path.join(__dirname, '..', '..', 'views', 'usuario_datospersonales.ejs'));
// });

module.exports = router;