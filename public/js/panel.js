/* menu hamburgues boton usuario*/
document.querySelector(".usuario").addEventListener("click", function() {
    var menu = document.querySelector(".menu-usuario");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

/* menu hamburguesa boton menu*/
document.querySelector(".menu").addEventListener("click", function() {
    var menu = document.querySelector(".menu-hamburguesa");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});


/* Cerrar el menú de usuario si se hace clic fuera */
document.addEventListener("click", function(event) {
    if (!event.target.matches('.usuario') && !event.target.closest('.menu-usuario')) {
        document.querySelector(".menu-usuario").style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Cargar la tabla principal cuando inicia la página
    cargarTabla("Clientes");

    const menuLinks = document.querySelectorAll(".menu-hamburguesa a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const contenidoId = link.getAttribute("data-content");

            if (contenidoId === "Clientes") {
                cargarTabla("Clientes");
            } else if (contenidoId === "Solicitudes") {
                cargarTabla("Solicitudes");
            }
        });
    });
});

// Función para cargar la tabla
function cargarTabla(tipo) {
    // Simulación con datos ficticios
    let datos;
    if (tipo === "Solicitudes") {
        datos = [
            { id: 1, nombre: "Solicitante 1", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 2, nombre: "Solicitante 2", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 3, nombre: "Solicitante 3", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 4, nombre: "Solicitante 4", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Solicitante 5", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
        ];
        

    } else {
        datos = [
            { id: 1, nombre: "Juan", vehiculos: "Moto", email: "juan@gmail.com", celular: "123456789" },
            { id: 2, nombre: "Anita", vehiculos: "Moto", email: "ana@gmail.com", celular: "123456789" },
            { id: 3, nombre: "Benjamin", vehiculos: "Bicicleta", email: "benja@gmail.com", celular: "123456789" },
            { id: 4, nombre: "Clara", vehiculos: "Auto", email: "clara@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Katherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
        ];
    }

    // Generar el HTML de la tabla
    let tablaHTML = `<thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Vehículos</th>
                            <th>Email</th>
                            <th>Celular</th>
                        </tr>
                    </thead><tbody>`;
    datos.forEach(dato => {
        tablaHTML += `<tr>
                        <td>${dato.id}</td>
                        <td><a href="/perfil_usuario/">${dato.nombre}</a></td>
                        <td>${dato.vehiculos}</td>
                        <td>${dato.email}</td>
                        <td>${dato.celular}</td>
                    </tr>`;
    });
    tablaHTML += `</tbody>`;

    // Insertar el contenido en la tabla
    document.querySelector(".contenedor-datos table").innerHTML = tablaHTML;
}

//--------------------------------------------------------------------------------------------------------------------------//
// Función para cargar la tabla con datos desde una API
//--------------------------------------------------------------------------------------------------------------------------//

async function cargarDatosSolicitantes() {
    try {
        const respuesta = await fetch('api/solicitante');
        if (!response.ok) {
            throw new Error('Error al obtener datos');
        }
        const datos = await response.json();
        mostrarDatosEnTabla(datos);
    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

function mostrarDatosEnTabla(datos) {
    const tabla = document.querySelector('#tabla-solicitantes');

    tabla.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Vehículos</th>
                <th>Email</th>
                <th>Celular</th>
            </tr>
        </thead>
        <tbody>
            ${datos.map(solicitante => `
                <tr>
                    <td>${solicitante.id}</td>
                    <td><a href="/detalles/${solicitante.id}">${solicitante.nombre}</a></td>
                    <td>${solicitante.vehiculos}</td>
                    <td>${solicitante.email}</td>
                    <td>${solicitante.celular}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

document.addEventListener('DOMContentLoaded', cargarDatosSolicitantes);
//--------------------------------------------------------------------------------------------------------------------//

// Toggle para el menú de ordenar
document.querySelector(".ordenar").addEventListener("click", function() {
    var menu = document.querySelector(".ordenar-menu-oculto");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Toggle para el menú de filtrar
document.querySelector(".filtrar").addEventListener("click", function() {
    var menu = document.querySelector(".filtrar-menu-oculto");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function(event) {
    var ordenarMenu = document.querySelector(".ordenar-menu-oculto");
    var filtrarMenu = document.querySelector(".filtrar-menu-oculto");

    if (!event.target.closest('.ordenar-menu') && !event.target.closest('.ordenar') && ordenarMenu.style.display === "block") {
        ordenarMenu.style.display = "none";
    }
    if (!event.target.closest('.filtrar-menu') && !event.target.closest('.filtrar') && filtrarMenu.style.display === "block") {
        filtrarMenu.style.display = "none";
    }
});


// Cerrar sesion--------------------------------//
document.addEventListener("DOMContentLoaded", function() {
    const cerrarSesionLink = document.getElementById("cerrar-sesion");

    if (cerrarSesionLink) {
        cerrarSesionLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "/cerrar-sesion";
        });
    }
});

// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA TRABAJAR NUEVOS CLIENTES --------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// función para mostrar el form cuando se apreta el botón 'agregar cliente'
// (dentro de ésta función, se encuentran las funciones'agregar otro vehículo' y 'eliminar vehículo')

document.getElementById('cargar-cliente').addEventListener('click', function(event) {
    event.preventDefault(); 

    const contenedorDatos = document.querySelector('.contenedor-datos');

    const formCliente = `
        <!-- sección de información personal ---------------------------------- -->
        <div class="info-personal">
            <h2><i class="fi fi-sc-user"></i>Ingresar Información Personal</h2>
            <div class="info-grid">
                <!-- primer colum -->
                <div class="colum1">
                    <label for="nombre">Nombre </label>
                    <input type="text" id="nombre" placeholder="Anita">
                    <label for="apellido">Apellido </label>
                    <input type="text" id="apellido" placeholder="Luz">
                    <label for="dni">DNI </label>
                    <input type="number" id="dni" placeholder="12345678">
                    <label for="email">Email </label>
                    <input type="email" id="email" placeholder="anita@gmail.com">
                </div>

                <!-- segunda colum -->
                <div class="colum2">
                    <label for="direccion">Dirección </label>
                    <input type="text" id="direccion" placeholder="Av. Calixto Calderon 424">
                    <label for="celular">Celular </label>
                    <input type="text" id="celular" placeholder="2346303040">
                    <label for="ciudad">Ciudad </label>
                    <input type="text" id="ciudad" placeholder="Chivilcoy">
                    <label for="provincia">Provincia </label>
                    <input type="text" id="provincia" placeholder="Buenos Aires">
                </div>
            </div>
        </div>

        <!-- sección de vehículos asegurados ---------------------------------- -->
        <div class="vehiculos-asegurados">
            <h2>Ingresar los vehículos asegurados</h2>

            <!-- Contenedor para agregar vehículos -->
            <div id="vehiculos-container">
                <!-- ejemplo de un vehículo -->
                <div class="vehiculo">
                    <div class="info-grid">
                        <div class="colum1">
                            <label for="tipo-vehiculo">Tipo de Vehículo </label>
                            <select id="tipo-vehiculo">
                                <option value="auto">Auto</option>
                                <option value="moto">Moto</option>
                            </select>
                            <label for="patente">Patente </label>
                            <input type="text" id="patente" placeholder="123AAA">
                            <label for="anio-vehiculo">Año </label>
                            <input type="number" id="anio-vehiculo" placeholder="2024">
                            <label for="vigencia-desde">Vigencia Desde </label>
                            <input type="date" id="vigencia-desde">
                            <label for="vigencia-hasta">Vigencia Hasta </label>
                            <input type="date" id="vigencia-hasta">
                        </div>

                        <div class="colum2">
                            <label>Fotos del vehículo</label>
                            <button onclick="cargarFotos('vehiculo1')" class="ver-fotos">Subir</button>
                            <label for="tipo-seguro">Tipo de Seguro </label>
                            <select id="tipo-seguro">
                                <option value="basico">Básico</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="premiun">Premiun</option>
                            </select>
                            <label for="premio-total">Premio Total (en pesos) </label>
                            <input type="number" id="premio-total" placeholder="$10.000,00">
                            <label for="suma-asegurada">Suma Asegurada </label>
                            <input type="number" id="suma-asegurada" placeholder="$1.000.000,00">
                            <label for="uso-vehiculo">Uso del Vehículo </label>
                            <select id="uso-vehiculo">
                                <option value="particular">Particular</option>
                                <option value="profesional">Profesional</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <button id="agregar-vehiculo" class="activo agregar-vehiculo">Agregar otro vehículo</button>

            <button class="guardar" onclick="guardarCambios()">Guardar</button>
            <button class="activo" onclick="cancelarCambios()">Cancelar</button>
        </div>
    `;

    contenedorDatos.innerHTML = formCliente;

    // función para agregar y eliminar un nuevo vehículo ----------------------
    document.getElementById('agregar-vehiculo').addEventListener('click', function() {
        const vehiculosContainer = document.getElementById('vehiculos-container');

        const nuevoVehiculo = document.createElement('div');
        nuevoVehiculo.classList.add('vehiculo');
        nuevoVehiculo.innerHTML = `
            <div class="info-grid">
                <div class="colum1">
                    <label for="tipo-vehiculo">Tipo de Vehículo </label>
                    <select>
                        <option value="auto">Auto</option>
                        <option value="moto">Moto</option>
                    </select>
                    <label for="patente">Patente </label>
                    <input type="text" placeholder="123AAA">
                    <label for="anio-vehiculo">Año </label>
                    <input type="number" placeholder="2024">
                    <label for="vigencia-desde">Vigencia Desde </label>
                    <input type="date">
                    <label for="vigencia-hasta">Vigencia Hasta </label>
                    <input type="date">
                </div>

                <div class="colum2">
                    <label>Fotos del vehículo</label>
                    <button onclick="cargarFotos('vehiculo1')" class="ver-fotos">Subir</button>
                    <label for="tipo-seguro">Tipo de Seguro </label>
                    <select>
                        <option value="basico">Básico</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="premiun">Premiun</option>
                    </select>
                    <label for="premio-total">Premio Total (en pesos) </label>
                    <input type="number" placeholder="$10.000,00">
                    <label for="suma-asegurada">Suma Asegurada </label>
                    <input type="number" placeholder="$1.000.000,00">
                    <label for="uso-vehiculo">Uso del Vehículo </label>
                    <select>
                        <option value="particular">Particular</option>
                        <option value="profesional">Profesional</option>
                    </select>
                </div>
            </div>
            
            <button class="activo eliminar-vehiculo">Eliminar vehículo</button>
        `;

        // agregar nuevo vehículo al contenedor
        vehiculosContainer.appendChild(nuevoVehiculo);

        // eliminar el nuevo vehículo del contenedor
        nuevoVehiculo.querySelector('.eliminar-vehiculo').addEventListener('click', function() {
            vehiculosContainer.remove
            Child(nuevoVehiculo);
        });
    });
});


// Función para manejar el guardado del cliente --------------
function guardarCliente() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const celular = document.getElementById('celular').value;
    const ciudad = document.getElementById('ciudad').value;
    const provincia = document.getElementById('provincia').value;

    //  envío de los datos al servidor
    // falta --
    
    //petición AJAX o redirigir HACER
    // falta --
}