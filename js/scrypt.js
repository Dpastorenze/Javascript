document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pais-form');
    const paislista = document.getElementById('paises-lista');
  
    // Cargar países almacenados al cargar la página
    cargarpais();
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const paisInput = document.getElementById('pais');
      const capitalInput = document.getElementById('capital');
      const poblacionInput = document.getElementById('poblacion');
      

      const pais = paisInput.value.trim();
      const capital = capitalInput.value.trim();
      const poblacion = poblacionInput.value.trim();
      
      if (pais !== '' && capital !== '' && poblacion !== '') {
        // Agregar país al localStorage
        agregarpais(pais, capital,poblacion);
        // Limpiar campos del formulario
        paisInput.value = '';
        capitalInput.value = '';
        poblacionInput.value = '';
      } else {
        alert('Por favor ingresa un país y su capital.');
      }
    });

  
    function agregarpais(pais, capital,poblacion) {
      const paises = JSON.parse(localStorage.getItem('paises')) || [];
      paises.push({ pais, capital,poblacion });
      localStorage.setItem('paises', JSON.stringify(paises));
      cargarpais();
    }
  
    function cargarpais() {
      const paises = JSON.parse(localStorage.getItem('paises')) || [];
      paislista.innerHTML = '';
      paises.forEach(pais => {
        
        const li = document.createElement('li');
        li.textContent = `Pais: ${pais.pais} - Capital : ${pais.capital} ---Poblacion: ${pais.poblacion}`;
        paislista.appendChild(li);
        
      });
    }
  });