// función para guardar los cambios del perfil
function guardarCambios() {
    const datosUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        provincia: document.getElementById('provincia').value,
    };

    console.log('Datos a guardar:', datosUsuario);
    // falta el AJAX para enviar los datos al servidor
}

