const multer = require("multer");
const path = require('path');

//configuracion de guardado de la imagen
const storage = multer.diskStorage({
    destination: "./public/uploads", //todas las imagenes van a la carpeta uploads
    filename: (req, file, callback) => {
        callback(null, file.originalname + "-" + Date.now() + path.extname(file.originalname)) //cada imagen que se agrega se renombra con la fecha actual
    }
});

//configuracion de multer 
const upload = multer ({
    storage: storage,
    limits: {
        fileSize: (1024 * 1024) * 3, //1024 bytes, un kb, 1024 * 1024 es un mega 
    },
    fileFilter: (req, file, callback) => {
        const mimetypesPermitidos = ['image/jpg', 'image/png', 'image/jpeg']; //tipos permitidos
       //para ver si el archivo enviado es del tipo permitido
        if(mimetypesPermitidos.includes(file.mimetype)) {
            callback(null,true); //si se ejecuta un callback de verdadero significa que se subio correctamente
        }
        else {
            callback("Solo se pueden subir archivos de timo imagen ");
        }
    } 
});
//los middelwares se incluyen del lado de las rutas, nunca del controlador
module.exports = upload;
