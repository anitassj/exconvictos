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

// secciones
const vehiculosAseguradosA = document.querySelector('#vehiculos-aseg');
const datosPersonalesA = document.querySelector('#datos-pers');
const denunciarSiniestroA = document.querySelector('#denunciar-sini');

const datosPersonalesSection = document.querySelector('.datos-personales');
const vehiculosAseguradosSection = document.querySelector('.vehiculos-asegurados');

menuHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('mostrar');
    iconoX.classList.toggle('mostrar');
    iconoBarras.classList.toggle('ocultar');
});

datosPersonalesA.addEventListener('click', () => {
    datosPersonalesSection.classList.add('mostrar');
    vehiculosAseguradosSection.classList.add('ocultar');
    menu.classList.toggle('mostrar');
})

vehiculosAseguradosA.addEventListener('click', () => {
    vehiculosAseguradosSection.classList.remove('ocultar');
    datosPersonalesSection.classList.remove('mostrar');
    menu.classList.toggle('mostrar');
})