// función p menú responsive --------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const iconoMenuResponsive = document.querySelector(".fi-rr-menu-burger");
    const menuResponsive = document.querySelector(".menu");
    const iconoCerrar = document.querySelector(".fi-br-cross");

    function toggleMenu() {
        menuResponsive.classList.toggle("activo");

        if (menuResponsive.classList.contains("activo")) {
            iconoMenuResponsive.classList.add("oculto");
            iconoCerrar.classList.remove("oculto");
            iconoCerrar.classList.add("x-rojo");
        } else {
            iconoMenuResponsive.classList.remove("oculto");
            iconoCerrar.classList.add("oculto");
            iconoCerrar.classList.remove("x-rojo");
        }
    }

    // cerrar el menú cuando se haga clic en un enlace
    function closeMenu() {
        menuResponsive.classList.remove("activo");
        iconoMenuResponsive.classList.remove("oculto");
        iconoCerrar.classList.add("oculto");
        iconoCerrar.classList.remove("x-rojo");
    }

    iconoMenuResponsive.addEventListener("click", toggleMenu);
    iconoCerrar.addEventListener("click", toggleMenu);

    const menuLinks = menuResponsive.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});

// función de carrusel promos -------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
      speed: 1500,
      slidesPerView: 3, 
      spaceBetween: 10, 
      loop: true, 
      effect: 'slide', 
      autoplay: {
          delay: 4000, 
          disableOnInteraction: false, 
      },
  });
});

// función con SweetAlert2 para los tipos de planes ---------------------------
document.getElementById('moto').addEventListener('click', function() {
    Swal.fire({
        title: 'Elegí un tipo de plan',
        showCloseButton: true,
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'Básico',
        denyButtonText: 'Intermedio',
        cancelButtonText: 'Premium',
        icon: 'question',
        confirmButtonColor: '#80cdd7',  
        denyButtonColor: '#499da7',      
        cancelButtonColor: '#126d77',   
        background: '#f4f4f4',              
        color: '#000',                    
        iconColor: '#2197a3',             
    }).then((result) => {
        if (result.isConfirmed) {
            // plan básico
            Swal.fire({
                title: 'Beneficios del Plan Básico',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil</strong></p>
                        <p><strong style="color: green;">✔ Robo Total</strong></p>
                        <p><strong style="color: red;">✘ Robo Parcial</strong></p>
                        <p><strong style="color: red;">✘ Daños por Accidentes</strong></p>
                        <p><strong style="color: red;">✘ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3', 
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        } else if (result.isDenied) {
            // plan intermedio moto
            Swal.fire({
                title: 'Beneficios del Plan Intermedio',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil</strong></p>
                        <p><strong style="color: green;">✔ Robo Total y Parcial</strong></p>
                        <p><strong style="color: green;">✔ Daños por Accidentes</strong></p>
                        <p><strong style="color: red;">✘ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3',
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // plan premium moto
            Swal.fire({
                title: 'Beneficios del Plan Premium',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil Ampliada</strong></p>
                        <p><strong style="color: green;">✔ Robo Total, Parcial y Daños por Intento de Robo</strong></p>
                        <p><strong style="color: green;">✔ Daños por Accidentes Completos</strong></p>
                        <p><strong style="color: green;">✔ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3',
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        }
    });
  });
  
  document.getElementById('auto').addEventListener('click', function() {
    Swal.fire({
        title: 'Elegí tu tipo de plan',
        showCloseButton: true,
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'Básico',
        denyButtonText: 'Intermedio',
        cancelButtonText: 'Premium',
        icon: 'question',
        confirmButtonColor: '#80cdd7',  
        denyButtonColor: '#499da7',      
        cancelButtonColor: '#126d77', 
        background: '#f4f4f4',
        color: '#000',
        iconColor: '#2197a3',  
    }).then((result) => {
        if (result.isConfirmed) {
            // plan básico auto
            Swal.fire({
                title: 'Beneficios del Plan Básico',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil</strong></p>
                        <p><strong style="color: green;">✔ Robo Total</strong></p>
                        <p><strong style="color: red;">✘ Robo Parcial</strong></p>
                        <p><strong style="color: red;">✘ Daños por Accidentes</strong></p>
                        <p><strong style="color: red;">✘ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3', 
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        } else if (result.isDenied) {
            // plan intermedio auto
            Swal.fire({
                title: 'Beneficios del Plan Intermedio',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil</strong></p>
                        <p><strong style="color: green;">✔ Robo Total y Parcial</strong></p>
                        <p><strong style="color: green;">✔ Daños por Accidentes</strong></p>
                        <p><strong style="color: red;">✘ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3',
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // plan premium auto
            Swal.fire({
                title: 'Beneficios del Plan Premium',
                html: `
                    <div style="text-align: left;">
                        <p><strong style="color: green;">✔ Responsabilidad Civil Ampliada</strong></p>
                        <p><strong style="color: green;">✔ Robo Total, Parcial y Daños por Intento de Robo</strong></p>
                        <p><strong style="color: green;">✔ Daños por Accidentes Completos</strong></p>
                        <p><strong style="color: green;">✔ Cobertura por Eventos Climáticos</strong></p>
                    </div>
                `,
                showCloseButton: true,
                icon: 'info',
                iconColor: '#2197a3',
                confirmButtonColor: '#2197a3',
                confirmButtonText: 'Cotizar ahora',
                background: '#f4f4f4',
                color: '#000',
                preConfirm: () => {
                    window.location.href = '/solicitante_form';
                }
            });
        }
    });
  });

// función sw preguntas frecuentes --------------------------------------------
document.querySelectorAll('.pregunta').forEach(pregunta => {
  pregunta.addEventListener('click', () => {
      const respuesta = pregunta.nextElementSibling;
      const icono = pregunta.querySelector('i');

      // mostrar/ocultar la respuesta
      if (respuesta.style.display === 'block') {
          respuesta.style.display = 'none';
          icono.classList.remove('fi-rr-angle-small-up');
          icono.classList.add('fi-rr-angle-small-down');
      } else {
          respuesta.style.display = 'block';
          icono.classList.remove('fi-rr-angle-small-down');
          icono.classList.add('fi-rr-angle-small-up');
      }
  });
});
