// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CARGAR NUEVOS CLIENTES ----------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// función para guardar los datos personales y vehículos --
document.getElementById('guardarCambios').addEventListener('click', function() {
    const datosPersonales = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        dni: document.getElementById('dni').value,
        email: document.getElementById('email').value,
        direccion: document.getElementById('direccion').value,
        celular: document.getElementById('celular').value,
        ciudad: document.getElementById('ciudad').value,
        provincia: document.getElementById('provincia').value
    };

    const datosVehiculo = {
        tipo_vehiculo: document.getElementById('tipo_vehiculo').value,
        patente: document.getElementById('patente').value,
        anio: document.getElementById('anio').value,
        vigencia_desde: document.getElementById('vigencia_desde').value,
        vigencia_hasta: document.getElementById('vigencia_hasta').value,
        tipo_seguro: document.getElementById('tipo_seguro').value,
        premio_total: document.getElementById('premio_total').value,
        suma_asegurada: document.getElementById('suma_asegurada').value,
        uso_vehiculo: document.getElementById('uso_vehiculo').value
    };

    const inputFile = document.getElementById('foto');
    const file = inputFile.files[0];

    const formData = new FormData(); 

    formData.append('datosPersonales', JSON.stringify(datosPersonales));
    formData.append('datosVehiculo', JSON.stringify(datosVehiculo));

    if (file) {
        formData.append('foto', file);
    }
    
    fetch('/guardarDatos', {
        method: 'POST',
        body: formData 
    })
    .then(response => {
        return response.json().then(data => {
            console.log("Respuesta del servidor:", data); 
            
            if (!response.ok) {
                throw new Error(data.message || 'Error en el envío de los datos');
            }
            return data; 
        });
    })
    .then(data => {
        console.log("data: respuesta del servidor", data);
        
        if (data.message === 'Datos guardados') {
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Datos y foto guardados con éxito.',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = '/panel';  
            });
        } else {
            throw new Error('Error en la respuesta del servidor');
        }
    })
    .catch(error => {
        console.error("Error capturado:", error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'No se pudieron guardar los datos. Por favor, intenta nuevamente.',
            confirmButtonText: 'Aceptar'
        });
    });
});

// función para validar los datos ------------------------
function validarDatos(datosPersonales, datosVehiculo) {
    // verificar que todos los campos obligatorios estén llenos
    for (const key in datosPersonales) {
        if (!datosPersonales[key]) return false;
    }
    for (const key in datosVehiculo) {
        if (!datosVehiculo[key]) return false;
    }
    return true;
}


// funcionalidad para el boton 'cancelar' -----------------
function cancelarCambios() {
    window.location.href = '/panel'; 
}