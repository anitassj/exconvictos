let editModo = false;
let cambiosGuardados = false;

// funcion para obtener los datos del perfil
async function obtenerDatosPerfil() {
    try {
        const response = await fetch('/api/perfil');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del perfil');
        }
        const datos = await response.json();
        
        // rellenar los campos del formulario con los datos obtenidos
        document.getElementById('nombre').value = datos.nombre;
        document.getElementById('apellido').value = datos.apellido;
        document.getElementById('email').value = datos.email;
        document.getElementById('celular').value = datos.celular;
        document.getElementById('direccion').value = datos.direccion;
        document.getElementById('ciudad').value = datos.ciudad;
        document.getElementById('provincia').value = datos.provincia;

    } catch (error) {
        console.error('Error:', error);
    }
}

// función para activar/desactivar modo edición -------------------------------
function editarPerfil() {
    // activar el modo edición
    editModo = true;
    cambiosGuardados = false; 

    document.getElementById('guardar').disabled = false;
    
    document.querySelectorAll('input').forEach(input => {
        input.disabled = false;
    });

    document.getElementById('guardar').classList.add('editar-modo');
}

// función para guardar los cambios -------------------------------------------
async function guardarCambios() {
    if (!editModo || !cambiosGuardados) {
        return;
    }

    // obtener datos del formulario
    const datosUsuario = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        celular: document.getElementById('celular').value,
        direccion: document.getElementById('direccion').value,
        ciudad: document.getElementById('ciudad').value,
        provincia: document.getElementById('provincia').value,
    };

    try {
        const response = await fetch('/api/perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        if (!response.ok) {
            throw new Error('Error al guardar los datos del perfil');
        }

        console.log('Cambios guardados.');

        // desactivar modo edición
        editModo = false;
        cambiosGuardados = false;
        document.getElementById('guardar').disabled = true;
        document.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });

        document.getElementById('guardar').classList.remove('editar-modo');

    } catch (error) {
        console.error('Error:', error);
    }
}

// función para detectar cambios en los campos del formulario -----------------
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (editModo) {
            cambiosGuardados = true; 
        }
    });
});

// inicializar la página con los datos del perfil ----------------------------
document.addEventListener('DOMContentLoaded', () => {
    // desactivar el botón guardar y los campos
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true;
    });
    document.getElementById('guardar').disabled = true;

    obtenerDatosPerfil();
});


// Redireccionar al hacer clic en el botón de menú hamburguesa
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu");
    menuButton.addEventListener("click", function() {
        // Redirecciona a la página deseada
        window.location.href = "/panel";
    });
       // Obtén los enlaces del menú hamburguesa
       const menuLinks = document.querySelectorAll(".menu-hamburguesa a");

       // Añade el listener de clic a cada enlace
       menuLinks.forEach(link => {
           link.addEventListener("click", function(event) {
               event.preventDefault();
           });
       });
   });


//  <button id="agregar-vehiculo" class="activo agregar-vehiculo configBotones"><span class="material-symbols-outlined botones">add_box</span>Agregar otro vehículo</button>

// función para agregar y eliminar un nuevo vehículo ----------------------
// document.getElementById('agregar-vehiculo').addEventListener('click', function() {
//     const vehiculosContainer = document.getElementById('vehiculos-container');

//     const nuevoVehiculo = document.createElement('div');
//     nuevoVehiculo.classList.add('vehiculo');
//     nuevoVehiculo.innerHTML = `
//         <h2>Ingresar el vehículo asegurado</h2>
//         <div class="info-grid">
//             <div class="colum1">
//             <label for="tipo-vehiculo">Tipo de Vehículo </label>
//             <select id="tipo-vehiculo">
//                     <option value="auto">Auto</option>
//                     <option value="moto">Moto</option>
//                 </select>
//                 <label for="patente">Patente </label>
//                 <input type="text" id="patente">
//                 <label for="anio-vehiculo">Año </label>
//                 <input type="number" id="anio-vehiculo">
//                 <label for="vigencia-desde">Vigencia Desde </label>
//                 <input type="date" id="vigencia-desde">
//                 <label for="vigencia-hasta">Vigencia Hasta </label>
//                 <input type="date" id="vigencia-hasta">
//             </div>
//             <div class="colum2">
//                 <label>Fotos del vehículo</label>
//                 <input type="file" id="foto-vehiculo1" accept="image/*" style="display:none"><button onclick="cargarFotos('vehiculo1')" class="ver-fotos configBotones"><span class="material-symbols-outlined botones">upload</span>Subir</button>
//                 <label for="tipo-seguro">Tipo de Seguro </label>
//                 <select id="tipo-seguro">
//                     <option value="basico">Básico</option>
//                     <option value="intermedio">Intermedio</option>
//                     <option value="premiun">Premiun</option>
//                 </select>
//                 <label for="premio-total">Premio Total (en pesos) </label>
//                 <input type="number" id="premio-total">
//                 <label for="suma-asegurada">Suma Asegurada </label>
//                 <input type="number" id="suma-asegurada">
//                 <label for="uso-vehiculo">Uso del Vehículo </label>
//                 <select id="uso-vehiculo">
//                     <option value="particular">Particular</option>
//                     <option value="profesional">Profesional</option>
//                 </select>
//             </div>
//         </div>
        
//         <button class="activo eliminar-vehiculo configBotones"><span class="material-symbols-outlined botones">delete</span>Eliminar</button>
//     `;

//     // agregar nuevo vehículo al contenedor
//     vehiculosContainer.appendChild(nuevoVehiculo);

//     // eliminar el nuevo vehículo del contenedor
//     nuevoVehiculo.querySelector('.eliminar-vehiculo').addEventListener('click', function() {
//         vehiculosContainer.removeChild(nuevoVehiculo);
//     });
// });