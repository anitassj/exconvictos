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

    fetch('/guardarDatos', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ datosPersonales,datosVehiculo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Datos guardados con éxito');
            window.location.href = '/panel';  
        } else {
            throw new Error('Error al guardar datos');
        }
    })
});

// funcionalidad para el boton 'cancelar' -----------------
function cancelarCambios() {
    window.location.href = '/panel'; 
}

// funcion para cargar las fotos --------------------------
function cargarFotos() {
    const inputFile = document.getElementById('foto');
    inputFile.click();

    inputFile.onchange = () => {
        const file = inputFile.files[0]; 
        if (file) {
            const formData = new FormData();
            formData.append('foto', file); 

            fetch('/guardarDatos', {  
                method: 'POST',
                body: formData 
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la carga de la foto');
                }
            })
            .then(data => {
                if (data.success) {
                    alert('Foto cargada con éxito');
                } else {
                    throw new Error('Error en la respuesta al cargar la foto');
                }
            })
            .catch(error => {
                alert('Error al cargar la foto: ' + error);
            });
        }
    };
}
