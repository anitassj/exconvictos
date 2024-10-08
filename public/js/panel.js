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
