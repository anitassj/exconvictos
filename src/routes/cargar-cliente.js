const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); //middleware para manejar la imagen
//const upload = multer({ dest: 'uploads/' }); // Configuración para guardar archivos en la carpeta 'uploads'
const cargarClienteController = require('../controllers/cargar-clienteController');

//siempre en la ruta nunca en el controlador el middleware
router.post('/gardarDatos', upload.single('foto'), async (req, res) => {
    try {

        const {nombre, apellido, dni, email, celular, direccion, ciudad, provincia, tipo_vehiculo, patente, anio, vigencia_desde, vigencia_hasta, tipo_seguro, premio_total, suma_asegurada, uso_vehiculo} = req.body;
        
        //para obtener la ruta de la imagen subida por multer
        const foto = req.file ? `/public/uploads/${req.file.filename}` : null; 
        
        //objeto cliente con los datos recibidos
        const cargarCliente = {nombre,apellido,dni,email,celular,direccion,ciudad,provincia,tipo_vehiculo,patente,anio,vigencia_desde,vigencia_hasta,foto,tipo_seguro,premio_total,suma_asegurada,uso_vehiculo};
        
        //llamo al método del modelo para guardar los datos
        const results = await cargarClienteController.guardarDatos(cargarCliente);

        res.json({
            message: 'Datos guardados exitosamente.',
            data: results
        });
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({ error: 'Hubo un error al guardar los datos.' });
    }
});

module.exports = router;
