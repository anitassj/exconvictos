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



/* boton menu mostrar o no */

const menuLinks = document.querySelectorAll(".menu-hamburguesa a");

const contenedorDatos = document.querySelector(".contenedor-datos");

// Define los contenidos para cada enlace
const contenidos = {
    contenido1: "<h2>Contenido para Link 1</h2><p>Aquí está el contenido para el primer enlace.</p>",
    contenido2: "<h2>Contenido para Link 2</h2><p>Aquí está el contenido para el segundo enlace.</p>",
    contenido3: "<h2>Contenido para Link 3</h2><p>Aquí está el contenido para el tercer enlace.</p>"
};

// Añade un evento click a cada enlace del menú
menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();  
        
        const contenidoId = link.getAttribute("data-content");
        const contenido = contenidos[contenidoId] || "<p>Contenido no disponible.</p>";

        contenedorDatos.innerHTML = contenido;
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