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
            { id: 1, nombre: "Solicitante_1", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 2, nombre: "Solicitante_2", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 3, nombre: "Solicitante_3", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 4, nombre: "Solicitante_4", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Solicitante_5", vehiculos: "Ejemplo", email: "ejemplo@gmail.com", celular: "123456789" },
        ];

    } else {
        datos = [
            { id: 1, nombre: "Juan", vehiculos: "Moto", email: "juan@gmail.com", celular: "123456789" },
            { id: 2, nombre: "Ana", vehiculos: "Moto", email: "ana@gmail.com", celular: "123456789" },
            { id: 3, nombre: "Benjamin", vehiculos: "Bicicleta", email: "benja@gmail.com", celular: "123456789" },
            { id: 4, nombre: "Clara", vehiculos: "Auto", email: "clara@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            { id: 5, nombre: "Catherine", vehiculos: "Auto", email: "caty@gmail.com", celular: "123456789" },
            
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

