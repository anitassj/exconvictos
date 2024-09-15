document.addEventListener('DOMContentLoaded', () => {
    const tipoSelect = document.getElementById('tipo');
    const idMarcaSelect = document.getElementById('idMarca');
    const idModeloSelect = document.getElementById('idModelo'); //cambie el nombre del campo
  
    // carga de marcas cuando se selecciona un tipo de vehículo --
    tipoSelect.addEventListener('change', async () => {
        const tipo = tipoSelect.value;
  
        // solicitar marcas según el tipo seleccionado
        const solicitudServer = await fetch(`/obtener-marcas?tipo=${tipo}`);
        const respServer = await solicitudServer.json();
  
        if (respServer.error) {
            console.error(respServer.error);
            return;
        }
  
        // reiniciar las opciones del campo marca
        idMarcaSelect.innerHTML = '<option value="" disabled selected>Seleccione una marca</option>'; 
  
        respServer.forEach(marca => {
            idMarcaSelect.innerHTML += `<option value="${marca.id_marcas}">${marca.nombre}</option>`;
        });
  
        // reiniciar las opciones del campo modelo
        idModeloSelect.innerHTML = '<option value="" disabled selected>Seleccione un modelo</option>';
    });
  
    // carga de modelos cuando se selecciona una marca --
    idMarcaSelect.addEventListener('change', async () => {
        const idMarca = idMarcaSelect.value;
        const tipo = tipoSelect.value;
  
        if (!idMarca || !tipo) {
          // si no hay marca seleccionada, limpiar el campo modelo
          idModeloSelect.innerHTML = '<option value="" disabled selected>Seleccione un modelo</option>';
          return;
        }
  
        // solicitar modelos según la marca seleccionada
        const solicitudServer = await fetch(`/obtener-modelos/${idMarca}?tipo=${tipo}`);
        const respServer = await solicitudServer.json();
  
        if (respServer.error) {
            console.error(respServer.error);
            return;
        }
  
        // reiniciar las opciones del campo modelo
        idModeloSelect.innerHTML = '<option value="" disabled selected>Seleccione un modelo</option>'; 
  
        respServer.forEach(modelo => {
            idModeloSelect.innerHTML += `<option value="${modelo.id_modelos}">${modelo.nombre}</option>`;
        });
    });
  });
  