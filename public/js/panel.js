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

// mostrar / ocultar menu hamburg
document.querySelector(".menu").addEventListener("click", function() {
    var contenedorPanel = document.querySelector(".contenedor-datos");
    var contenedorTabs = document.querySelector(".tabs");
    contenedorPanel.classList.toggle("acomodar-margin-panel");
    contenedorTabs.classList.toggle("acomodar-margin-tabs");

    document.querySelector(".menu-usuario").style.display = "none";
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
// FUNCIONES PARA CREAR USUARIOS ------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

document.getElementById('cargar-usuario').addEventListener('click', function(event) {
    event.preventDefault();

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

    // buscar el usuario (email) a partir del DNI -----------------------------
    document.getElementById('buscar-usuario').addEventListener('click', async () => {
        const dni = document.getElementById('dni').value;

        // despues esto lo manejo con sweet alert
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

    // generar contraseña aleatoria -------------------------------------------
    document.getElementById('generar-password').addEventListener('click', () => {
        const generatedPassword = Math.random().toString(36).slice(-8); 
        document.getElementById('password').value = generatedPassword;
    });

    // crear el usuario -------------------------------------------------------
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

            // despues hacerlo con sweet alert !!
            alert('Usuario creado con éxito');
        } catch (error) {
            alert('Error: ' + error.message);
        }
    });
});
