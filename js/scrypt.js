// let array = [];
// let arraypar=[];
// confirm('se van a separar los numeros pares ingresados ')
// let cantidad = Number(prompt('Ingrese la cantidad de números a ingresar'));
// alert('la cantidad de numeros ingresados es '+cantidad);

// for (let i = 0; i < cantidad; i++) {

// let numero = Number(prompt('Ingrese número'));

// array.push(numero);

// if(numero%2 ===0){
//     let numpar=numero;
//     console.log('el numero '+ numpar+ ' es par');
//     arraypar.push(numpar);
// }
// }
// console.log(array);
// console.log(arraypar);

// confirm('ahora separaremos en impares')
// let cantidadimpar = Number(prompt('Ingrese la cantidad de números a ingresar'));
// alert('la cantidad de numeros ingresados es '+cantidadimpar);
// function impares(){
    
//     let arrayimpar=[];
//     for (let i = 0; i < cantidadimpar; i++) {
//         let numeroimpar=Number(prompt('ingresa numero'));
        
//         if(numeroimpar % 2 ===1){
//             let numimpar=numeroimpar;
//             console.log('el numero '+ numimpar+ ' es impar');
//         arrayimpar.push(numimpar);
//         }
        
// }
// console.log(arrayimpar.sort());
// }
// impares();


document.addEventListener('DOMContentLoaded', function() {
    const formPais = document.getElementById('form-pais');
    const listaPaises = document.getElementById('lista-paises');

    // Cargar los países almacenados en Local Storage al cargar la página
    cargarPaises();

    formPais.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const capital = document.getElementById('capital').value;
        const poblacion = document.getElementById('poblacion').value;

        // Crear un objeto para el nuevo país
        const pais = {
            nombre: nombre,
            capital: capital,
            poblacion: poblacion
        };

        // Guardar el nuevo país en Local Storage
        guardarPais(pais);

        // Limpiar el formulario
        formPais.reset();

        // Actualizar la lista de países
        mostrarPaises();
    });

    function cargarPaises() {
        let paises = JSON.parse(localStorage.getItem('paises')) || [];
        paises.forEach(function(pais) {
            agregarPaisLista(pais);
        });
    }

    function guardarPais(pais) {
        let paises = JSON.parse(localStorage.getItem('paises')) || [];
        paises.push(pais);
        localStorage.setItem('paises', JSON.stringify(paises));
    }

    function mostrarPaises() {
        listaPaises.innerHTML = ''; // Limpiar la lista antes de volver a agregar los países
        cargarPaises(); // Recargar la lista de países
    }

    function agregarPaisLista(pais) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${pais.nombre}</strong> - Capital: ${pais.capital}, Población: ${pais.poblacion}`;
        listaPaises.appendChild(li);
    }
});
