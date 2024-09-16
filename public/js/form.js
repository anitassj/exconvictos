// mostrar datos precargados al cliente desde el servidor (marca y modelo del vehículo) -----------
document.addEventListener('DOMContentLoaded', () => {
  const tipoSelect = document.getElementById('tipo');
  const marcaSelect = document.getElementById('idMarca');
  const modeloSelect = document.getElementById('idModelo');

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
      marcaSelect.innerHTML = '<option value="">Seleccione una marca</option>'; 

      respServer.forEach(marca => {
          marcaSelect.innerHTML += `<option value="${marca.id_marcas}">${marca.nombre}</option>`;
      });

      // reiniciar las opciones del campo modelo
      modeloSelect.innerHTML = '<option value="">Seleccione un modelo</option>';
  });

  // carga de modelos cuando se selecciona una marca --
  marcaSelect.addEventListener('change', async () => {
      const idMarca = marcaSelect.value;

      // solicitar modelos según la marca seleccionada
      const solicitudServer = await fetch(`/obtener-modelos/${idMarca}`);
      const respServer = await solicitudServer.json();

      // reiniciar las opciones del campo modelo
      modeloSelect.innerHTML = '<option value="">Seleccione un modelo</option>'; 

      respServer.forEach(modelo => {
          modeloSelect.innerHTML += `<option value="${modelo.id_modelo}">${modelo.nombre}</option>`;
        });
    });
});