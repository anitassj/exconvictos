const conexion = require('../models/db'); 

exports.buscarEmailPorDni = async (req, res) => {
    const { dni } = req.params; // Extraer el DNI de los parámetros de la URL
    try {
        const [result] = await conexion.promise().query(
            'SELECT email, nombre, apellido FROM datosPersonales WHERE dni = ?',
            [dni]
        );
        
        console.log('Resultado completo:', result); // Verifica el objeto completo

        if (result.length > 0) {
            const cliente = result[0];
            res.json({
                email: cliente.email,
                nombre: cliente.nombre,
                apellido: cliente.apellido
            });
        } else {
            res.status(404).json({ error: 'No se encontró el cliente con ese DNI' });
        }
    } catch (error) {
        console.error('Error al buscar el email:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};