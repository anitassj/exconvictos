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
