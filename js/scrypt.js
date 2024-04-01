document.addEventListener('DOMContentLoaded', function () {
  const buscadorformulario = document.getElementById('buscadorform');
  const buscadorinput = document.getElementById('buscadorpais');
  const infopais = document.getElementById('info-pais');
  const imgbandera = document.getElementById('bandera');
  const nombrepais = document.getElementById('nombre-pais');
  const capital = document.getElementById('capital-pais');
  const paisajeimg = document.getElementById('paisaje-img');
  const entradacoment = document.getElementById('ent-comentario');
  const listadocoment = document.getElementById('listacomentarios');
  const btncoment = document.getElementById('agrega-coment');

  // escucha para el buscador pais 
  buscadorformulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const buscatermino = buscadorinput.value.trim();
    if (buscatermino !== '') {
      buscadorpais(buscatermino);
    }
  });
  // boton con libreria 
  btncoment.addEventListener('click', function () {
    const textocoment = entradacoment.value.trim();
    if (textocoment !== '') {
      btncomenta(textocoment);
      entradacoment.value = '';
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Gracias por dejarnos tu comentario",
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
  // tras varios intentos la api no tiene traduccion a la hora de buscar un pais 
  function buscadorpais(country) {
    axios.get(`https://restcountries.com/v3.1/name/${country}?lang=es`)
      .then(response => {
        const data = response.data[0];
        displayinfopais(data);
        displaypaisaje(country);
        displaycomentarios(country);
      })
      .catch(error => {
        console.error('Error al obtener datos del país:', error);
      });
  }
  // informacion del pais con su bandera
  function displayinfopais(countryData) {
    imgbandera.src = countryData.flags.png;
    nombrepais.textContent = `País: ${countryData.name.common}`;
    capital.textContent = `Capital: ${countryData.capital[0]}`;
  }
  // funcion con imagen de api sobre el paisaje del pais seleccionado
  function displaypaisaje(country) {
    axios.get(`https://api.unsplash.com/photos/random?query=${country}&client_id=lVBDx--0aNdZkXyXuUu0ZOuCZxC0gko466MeVbtQHLA`)
      .then(response => {
        const imageUrl = response.data.urls.regular;
        paisajeimg.src = imageUrl;
      })
      .catch(error => {
        console.error('Error al obtener imagen del paisaje:', error);
      });
  }
  // caja de comentarios almacenados en el localstorage 
  function displaycomentarios(country) {
    const comentarios = JSON.parse(localStorage.getItem(country)) || [];
    listadocoment.innerHTML = '';
    comentarios.forEach(comentario => {
      const creacoment = document.createElement('li');
      creacoment.textContent = comentario;
      listadocoment.appendChild(creacoment);
    });
  }
  // boton para evento
  function btncomenta(comentario) {
    const country = nombrepais.textContent.replace('País: ', '');
    const comentarios = JSON.parse(localStorage.getItem(country)) || [];
    comentarios.push(comentario);
    localStorage.setItem(country, JSON.stringify(comentarios));
    displaycomentarios(country);
  }
});