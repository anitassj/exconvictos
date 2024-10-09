// ----------------------------------------------------------------------------
// mostrar 'vehiculo' y ocultar 'datos' ---------------------------------------
// ----------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const datosPersonalesTab = document.getElementById('datos-personales-tab');
    const vehiculosTab = document.getElementById('vehiculos-tab');

    datosPersonalesTab.classList.add('tabDesactivado');
    datosPersonalesTab.classList.remove('tabActivo'); 
    vehiculosTab.classList.remove('tabDesactivado'); 
    vehiculosTab.classList.add('tabActivo'); 
});

// ----------------------------------------------------------------------------
// buscar las fotos y mostrarlas  ---------------------------------------------
// ----------------------------------------------------------------------------

// REVISAR ESTO NO SE COMO HACERLOOOO soy ANITA desp sigoooo
function verFotos(idCliente) {
    fetch(`/fotos/${idCliente}`) //CAMBIAR LA RUTA !!!!!!!!!!!!!!!!!!!
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar las fotos');
            }
            return response.json();
        })
        .then(data => {
            mostrarFotos(data.fotos); 
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudieron cargar las fotos',
            });
        });
}

function mostrarFotos(fotos) {
    const contenido = fotos.map(foto => `<img src="${foto}" alt="Foto del vehículo" style="width: 100%; margin-bottom: 10px;">`).join('');

    Swal.fire({
        title: 'Fotos del Vehículo',
        html: contenido,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'my-swal-popup'
        }
    });
}
