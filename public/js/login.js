document.addEventListener('DOMContentLoaded', () => {
    const errorMessage = document.querySelector('#error-message');
    const error = errorMessage.getAttribute('data-error');

    // Si existe un error, mostrar la alerta con sweetalert2
    if (error) {
        Swal.fire({
            title: 'Error al iniciar sesión...',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#2197a3"
        });
    }
});