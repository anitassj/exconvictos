// Edición de datos
const editar = document.querySelector('.editar');
const guardar = document.querySelector('.guardar');
const cancelar = document.querySelector('.cancelar');

const inputs = document.querySelectorAll('.dato');

let valoresOriginales = [];

editar.addEventListener('click', () => {
    guardar.classList.add('mostrar');
    cancelar.classList.add('mostrar');
    editar.classList.add('esconder');

    valoresOriginales = Array.from(inputs).map(input => input.value);

    inputs.forEach(dato => {
        dato.classList.add('modo-edicion');
        dato.disabled = false;
    });
});

cancelar.addEventListener('click', () => {
    editar.classList.remove('esconder');
    editar.classList.add('mostrar');
    guardar.classList.remove('mostrar');
    cancelar.classList.remove('mostrar');

    inputs.forEach((dato, index) => {
        dato.classList.remove('modo-edicion');
        dato.disabled = true;
        dato.value = valoresOriginales[index];
    });
});

guardar.addEventListener('click', () => {
    editar.classList.remove('esconder');
    editar.classList.add('mostrar');
    guardar.classList.remove('mostrar');
    cancelar.classList.remove('mostrar');

    inputs.forEach(dato => {
        dato.classList.remove('modo-edicion');
        dato.disabled = true;
    });
});

// Menú interactivo
const menuHamburguesa = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu');

const iconoBarras = document.querySelector('#icono-barras');
const iconoX = document.querySelector('#icono-x');

menuHamburguesa.addEventListener('click', () => {
    console.log('Menú clickeado');
    menu.classList.toggle('mostrar');
    iconoX.classList.toggle('mostrar');
    iconoBarras.classList.toggle('ocultar');
});

// usuario_datospersonales.js
// Obtener el ID del cliente de la URL
const urlParams = new URLSearchParams(window.location.search);
const id_cliente = urlParams.get('id_cliente'); // Suponiendo que el ID se pasa como query param

// Función para obtener datos personales
async function obtenerDatosPersonales() {
    try {
        const response = await fetch(`/usuario/datos-personales/${id_cliente}`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos personales.');
        }
        const datosPersonales = await response.json();

        console.log(datosPersonales);
        

        // Reemplazar los valores de los inputs
        document.getElementById('nombre').value = datosPersonales.nombre;
        document.getElementById('apellido').value = datosPersonales.apellido;
        document.getElementById('dni').value = datosPersonales.dni;
        document.getElementById('email').value = datosPersonales.email;
        document.getElementById('celular').value = datosPersonales.celular;
        document.getElementById('direccion').value = datosPersonales.direccion;
        document.getElementById('ciudad').value = datosPersonales.ciudad;
        document.getElementById('provincia').value = datosPersonales.provincia;

    } catch (error) {
        console.error(error);
    }
}

// Llamar a la función cuando la página se carga
window.onload = obtenerDatosPersonales;