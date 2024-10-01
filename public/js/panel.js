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

            
            // Limpiar el contenedor de datos antes de cargar nuevo contenido
            const contenedorDatos = document.querySelector(".contenedor-datos");
            contenedorDatos.innerHTML = ""; // Limpiar contenido previo

            if (contenidoId === "Clientes") {
                cargarTabla("Clientes");
            } else if (contenidoId === "Solicitudes") {
                cargarTabla("Solicitudes");
            } else if (contenidoId === "addCliente") {
                FormularioCargarCliente();
            } else if (contenidoId === "addUsuario") {
                mostrarFormularioCrearUsuario();
            } else if (contenidoId === "addCobertura") {
                CrearCobertura();
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
        ];
    }

    // Generar el HTML de la tabla
    let tablaHTML = `<thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Tipo</th>
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

// Función para cargar la tabla con datos desde una API
async function cargarDatosSolicitantes() {
    try {
        const respuesta = await fetch('api/solicitante');
        if (!respuesta.ok) {
            throw new Error('Error al obtener datos');
        }
        const datos = await respuesta.json();
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
                <th>Tipo</th>
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

// Cargar datos solicitantes al inicio
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

// función para mostrar el form cuando se apreta el botón 'agregar cliente' ---

function FormularioCargarCliente() {
    const formCliente = `
        <!-- sección de información personal ---------------------------------- -->
        <div class="info-personal">
            <div class="logos"><span class="material-symbols-outlined">person</span></div>
            <h2>Ingresar Información Personal</h2>
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
            <div class="logos"><span class="material-symbols-outlined">directions_car</span></div>
            <h2>Ingresar el vehículo asegurado</h2>

            <!-- Contenedor para agregar vehículos -->
            <div id="vehiculos-container">
                <div class="vehiculo">
                    <div class="info-grid">
                        <div class="colum1">
                            <label for="tipo-vehiculo">Tipo de Vehículo </label>
                            <select id="tipo-vehiculo">
                                <option value="" disabled selected>Selecciona un tipo de vehículo</option>
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
                            <input type="file" id="foto-vehiculo1" accept="image/*" style="display:none">
                            <button onclick="cargarFotos('vehiculo1')" class="ver-fotos configBotones">
                                <span class="material-symbols-outlined botones">upload</span>Subir
                            </button>
                            <label for="tipo-seguro">Tipo de Seguro </label>
                            <select id="tipo-seguro">
                                <option value="" disabled selected>Selecciona un tipo de plan</option>
                                <option value="basico">Básico</option>
                                <option value="intermedio">Intermedio</option>
                                <option value="premiun">Premiun</option>
                            </select>
                            <label for="premio-total">Premio Total en pesos </label>
                            <input type="number" id="premio-total" placeholder="10.000,00">
                            <label for="suma-asegurada">Suma Asegurada en pesos </label>
                            <input type="number" id="suma-asegurada" placeholder="1.000.000,00">
                            <label for="uso-vehiculo">Uso del Vehículo </label>
                            <select id="uso-vehiculo">
                                <option value="" disabled selected>Selecciona un tipo de uso</option>
                                <option value="particular">Particular</option>
                                <option value="profesional">Profesional</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <button id="guardarCambios" class="activo configBotones">
                <span class="material-symbols-outlined botones">check_small</span>Guardar
            </button>
            <button class="activo cancelar configBotones" onclick="cancelarCambios()">
                <span class="material-symbols-outlined botones">close</span>Cancelar
            </button>
        </div>
    `;
    document.querySelector(".contenedor-datos").innerHTML = formCliente;
}

    contenedorDatos.innerHTML = formCliente;
});

// función para redirigir al panel principal ----------------------------------
function cancelarCambios() {
    window.location.href = '/panel'; 
}

// función para verificar si todos los campos están completos -----------------
function verificarCamposCompletos() {
    const campos = [
        document.getElementById('nombre'),
        document.getElementById('apellido'),
        document.getElementById('dni'),
        document.getElementById('email'),
        document.getElementById('direccion'),
        document.getElementById('celular'),
        document.getElementById('ciudad'),
        document.getElementById('provincia'),
    ];

    const todosCompletos = campos.every(campo => campo.value.trim() !== '');

    const vehiculos = document.querySelectorAll('.vehiculo');
    let vehiculosCompletos = true;

    vehiculos.forEach(vehiculo => {
        const tipoVehiculo = vehiculo.querySelector('#tipo-vehiculo');
        const patente = vehiculo.querySelector('#patente');
        const anioVehiculo = vehiculo.querySelector('#anio-vehiculo');
        const vigenciaDesde = vehiculo.querySelector('#vigencia-desde');
        const vigenciaHasta = vehiculo.querySelector('#vigencia-hasta');
        const tipoSeguro = vehiculo.querySelector('#tipo-seguro');
        const premioTotal = vehiculo.querySelector('#premio-total');
        const sumaAsegurada = vehiculo.querySelector('#suma-asegurada');
        const usoVehiculo = vehiculo.querySelector('#uso-vehiculo');

        if (
            tipoVehiculo.value.trim() === '' ||
            patente.value.trim() === '' ||
            anioVehiculo.value.trim() === '' ||
            vigenciaDesde.value.trim() === '' ||
            vigenciaHasta.value.trim() === '' ||
            tipoSeguro.value.trim() === '' ||
            premioTotal.value.trim() === '' ||
            sumaAsegurada.value.trim() === '' ||
            usoVehiculo.value.trim() === ''
        ) {
            vehiculosCompletos = false;
        }
    });

    const botonGuardar = document.querySelector('guardarCambios');
    if (todosCompletos && vehiculosCompletos) {
        botonGuardar.classList.add('activo');
        botonGuardar.classList.remove('desactivado');
    } else {
        botonGuardar.classList.remove('activo');
        botonGuardar.classList.add('desactivado');
    }
}

document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', verificarCamposCompletos);
});
        
// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CARGAR FOTOS --------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

function cargarFotos(vehiculoId) {
    const inputFile = document.getElementById(`foto-${vehiculoId}`);
    
    inputFile.click();

    inputFile.onchange = () => {
        const file = inputFile.files[0]; 
        if (file) {
            const formData = new FormData();
            formData.append('foto', file); 

            fetch('/guardarDatos', { // cambiar a la ruta !!!!!!!!!!!!!!!
                method: 'POST',
                body: formData 
            })
            .then(response => {
                if (response.ok) {
                    alert('Foto subida con éxito');
                } else {
                    throw new Error('Error en la respuesta del servidor');
                }
            })
            .catch(error => {
                alert('Error al subir la foto: ' + error);
            });
        }
    };
}

// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CREAR USUARIOS ------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

function mostrarFormularioCrearUsuario() {
    const contenedorDatos = document.querySelector('.contenedor-datos');

    const cargarUsuario = `
        <h2>Crear nuevo usuario</h2>
        <div class="form-crear-usuario">
            <table>
                <tr>
                    <td class="label-column"><label for="dni">DNI</label></td>
                    <td class="input-column">
                        <input type="text" id="dni" name="dni" placeholder="Ingresar DNI">
                        <button type="button" id="buscar-usuario" class="activo configBotones"><span class="material-symbols-outlined botones">search</span>Buscar</button>
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="email">Email asociado</label></td>
                    <td class="input-column">
                        <input type="email" id="email" name="email" placeholder="anita@gmail.com" readonly>
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="password">Generar contraseña</label></td>
                    <td class="input-column">
                        <input type="password" id="password" name="password" placeholder="Generar contraseña">
                        <button type="button" id="generar-password" class="activo configBotones"><span class="material-symbols-outlined botones">lock_reset</span>Generar</button>
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="rol">Asignar rol</label></td>
                    <td class="input-column">
                        <select id="rol" name="rol">
                            <option value="" disabled selected>Seleccionar rol</option>
                            <option value="admin">Administrador</option>
                            <option value="usuario">Usuario</option>
                        </select>
                    </td>
                </tr>
            </table>
            <button type="button" id="crear-usuario" class="activo configBotones"><span class="material-symbols-outlined botones">add_circle</span>Crear usuario</button>
        </div>
    `;

    contenedorDatos.innerHTML = cargarUsuario;

    // Eventos para el formulario de crear usuario
    setupFormularioCrearUsuario();
}

// Función para configurar los eventos del formulario de crear usuario
function setupFormularioCrearUsuario() {
    // buscar el usuario (email) a partir del DNI
    document.getElementById('buscar-usuario').addEventListener('click', async () => {
        const dni = document.getElementById('dni').value;

        if (!dni) {
            alert('Por favor, ingresa un DNI válido.');
            return;
        }

        try {
            const response = await fetch(`/buscar-usuario/${dni}`, { method: 'GET' }); // CAMBIAR RUTA!!!
            if (!response.ok) {
                throw new Error('Error al buscar el usuario');
            }

            const data = await response.json();
            if (data.email) {
                document.getElementById('email').value = data.email;
            } else {
                alert('No se encontró un usuario con ese DNI.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });

    // generar contraseña aleatoria
    document.getElementById('generar-password').addEventListener('click', () => {
        const generatedPassword = Math.random().toString(36).slice(-8); 
        document.getElementById('password').value = generatedPassword;
    });

    // crear el usuario
    document.getElementById('crear-usuario').addEventListener('click', async () => {
        const dni = document.getElementById('dni').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rol = document.getElementById('rol').value;

        if (!dni || !email || !password || !rol) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const usuarioDatos = {
            dni,
            email,
            password,
            rol
        };

        try {
            const response = await fetch('/crear-usuario', { // CAMBIAR RUTA !!!!!!!!!!!!!!!
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuarioDatos),
            });

            if (!response.ok) {
                throw new Error('Error al crear el usuario');
            }

            alert('Usuario creado con éxito');
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
}


// ------------------------------------------------------------------------------------------------
// FUNCIONES PARA CREAR COBERTURA NUEVA -----------------------------------------------------------
// ------------------------------------------------------------------------------------------------

function CrearCobertura() {
    const contenedorDatos = document.querySelector('.contenedor-datos');

    const cargarCobertura = `
        <h2>Agregar nueva cobertura</h2>
        <div class="form-nueva-cobertura">
            <table>
                <tr>
                    <td class="label-column"><label for="tipo-vehiculo">Tipo de vehículo</label></td>
                    <td class="input-column">
                        <input type="text" id="tipo-vehiculo" name="tipo-vehiculo" placeholder="Ingresar tipo de vehículo">
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="marca">Marca</label></td>
                    <td class="input-column">
                        <input type="text" id="marca" name="marca" placeholder="Ingresar marca">
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="modelo">Modelo</label></td>
                    <td class="input-column">
                        <input type="text" id="modelo" name="modelo" placeholder="Ingresar modelo">
                    </td>
                </tr>
                <tr>
                    <td class="label-column"><label for="anio">Año</label></td>
                    <td class="input-column">
                        <input type="number" id="anio" name="anio" placeholder="Ingresar año" min="1900" max="${new Date().getFullYear()}">
                    </td>
                </tr>
            </table>
            <button type="button" id="agregar-cobertura" class="activo configBotones"><span class="material-symbols-outlined botones">add_circle</span>Agregar cobertura</button>
        </div>
    `;

    contenedorDatos.innerHTML = cargarCobertura;

    // Eventos para el formulario de nueva cobertura
    setupFormularioNuevaCobertura();
}

// Función para configurar los eventos del formulario de nueva cobertura
function setupFormularioNuevaCobertura() {
    // Agregar la nueva cobertura
    document.getElementById('agregar-cobertura').addEventListener('click', async () => {
        const tipoVehiculo = document.getElementById('tipo-vehiculo').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        const anio = document.getElementById('anio').value;

        if (!tipoVehiculo || !marca || !modelo || !anio) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const coberturaDatos = {
            tipoVehiculo,
            marca,
            modelo,
            anio
        };

        try {
            const response = await fetch('/agregar-cobertura', { // CAMBIAR RUTA !!!!!!!!!!!!!!!
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(coberturaDatos),
            });

            if (!response.ok) {
                throw new Error('Error al agregar la cobertura');
            }

            alert('Cobertura agregada con éxito');
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
}