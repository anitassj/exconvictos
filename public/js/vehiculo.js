document.addEventListener('DOMContentLoaded', function() {
    const datosPersonalesTab = document.getElementById('datos-personales-tab');
    const vehiculosTab = document.getElementById('vehiculos-tab');

    // Al cargar la página, configurar el estado inicial
    document.querySelector('.info-personal').classList.add('oculto'); // Ocultar datos personales
    document.querySelector('.vehiculos-asegurados').classList.remove('oculto'); // Mostrar vehículos

    // Inicializar clases
    vehiculosTab.classList.add('tabActivo'); // Vehículos activo
    datosPersonalesTab.classList.remove('tabActivo'); 
    datosPersonalesTab.classList.add('tabDesactivado'); // Datos personales desactivado

    // click de 'datos personales'
    datosPersonalesTab.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        // Mostrar información de datos personales
        document.querySelector('.info-personal').classList.remove('oculto');
        document.querySelector('.vehiculos-asegurados').classList.add('oculto'); // Ocultar vehículos

        // Cambiar clases
        datosPersonalesTab.classList.add('tabActivo');
        vehiculosTab.classList.remove('tabActivo');
        vehiculosTab.classList.add('tabDesactivado');
        datosPersonalesTab.classList.remove('tabDesactivado');
    });

    // click de vehículos
    vehiculosTab.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        // Redirigir a la página ver-vehiculos.ejs
        window.location.href = '/ver-vehiculo'; // Asegúrate de que esta ruta sea correcta en tu servidor
    });
});
