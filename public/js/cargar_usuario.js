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

    // llamada a la función de validación antes de continuar
    if (!validarDatos(datosPersonales, datosVehiculo)) {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, completa todos los campos antes de continuar.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // llama a la función de validación del formato de los datos antes d continuar
    if (!validarFormatoDatos(datosPersonales, datosVehiculo)) {
        return;
    }

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

// función para validar si existen los datos --------------
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

// funcion para validar el formato de los datos -----------
function validarFormatoDatos(datosPersonales, datosVehiculo) {
    let esValido = true;
    let mensajesDeError = [];

    // eliminar las clases de error antes de una nueva validación
    limpiarErrores();

    // validación de nombre
    if (!datosPersonales.nombre) {
        mensajesDeError.push('Ingresa tu nombre.');
        document.getElementById('nombre').classList.add('input-error');
        esValido = false;
    }

    // validación de apellido
    if (!datosPersonales.apellido) {
        mensajesDeError.push('Ingresa tu apellido.');
        document.getElementById('apellido').classList.add('input-error');
        esValido = false;
    }

    // validación de DNI
    if (!/^\d{7,8}$/.test(datosPersonales.dni)) {
        mensajesDeError.push('El DNI debe ser un número de 7 u 8 dígitos.');
        document.getElementById('dni').classList.add('input-error');
        esValido = false;
    }

    // validación de email
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(datosPersonales.email)) {
        mensajesDeError.push('Ingresa un email válido.');
        document.getElementById('email').classList.add('input-error');
        esValido = false;
    }

    // validación de celular (10 dígitos, no debe empezar con 0)
    const celularVal = /^[1-9][0-9]{9}$/;
    if (!celularVal.test(datosPersonales.celular)) {
        mensajesDeError.push('El celular debe ser un número de 10 dígitos y no debe empezar con 0.');
        document.getElementById('celular').classList.add('input-error');
        esValido = false;
    }

    // validación de patente
    const patenteVal = /^(?:[A-Z]{2}\d{3}[A-Z]{2}|\d{3}[A-Z]{3})$/i;
    if (!patenteVal.test(datosVehiculo.patente)) {
        mensajesDeError.push('La patente debe tener un formato válido: AA123BB o 123ABC.');
        document.getElementById('patente').classList.add('input-error');
        esValido = false;
    }

    // validación de año
    const anioActual = new Date().getFullYear();
    if (datosVehiculo.anio < 1900 || datosVehiculo.anio > anioActual) {
        mensajesDeError.push('Ingresa un año válido.');
        document.getElementById('anio').classList.add('input-error');
        esValido = false;
    }

    // mostrar errores si hay alguno
    if (!esValido) {
        Swal.fire({
            icon: 'error',
            title: 'Errores en la carga de datos',
            text: mensajesDeError.join(' '),
            confirmButtonText: 'Aceptar'
        });
    }

    return esValido;
}

// función para limpiar los errores antes de una nueva validación
function limpiarErrores() {
    const campos = ['nombre', 'apellido', 'dni', 'email', 'celular', 'patente', 'anio'];
    
    campos.forEach(campo => {
        document.getElementById(campo).classList.remove('input-error');
    });
}

// funcionalidad para el boton 'cancelar' -----------------
function cancelarCambios() {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No se guardarán los datos del cliente.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/panel'; 
        }
    });
}