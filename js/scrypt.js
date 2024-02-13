let array = [];
let arraypar=[];
confirm('se van a separar los numeros pares ingresados ')
let cantidad = Number(prompt('Ingrese la cantidad de números a ingresar'));
alert('la cantidad de numeros ingresados es '+cantidad);

for (let i = 0; i < cantidad; i++) {

let numero = Number(prompt('Ingrese número'));

array.push(numero);

if(numero%2 ===0){
    let numpar=numero;
    console.log('el numero '+ numpar+ ' es par');
    arraypar.push(numpar);
}
}
console.log(array);
console.log(arraypar);

confirm('ahora separaremos en impares')
let cantidadimpar = Number(prompt('Ingrese la cantidad de números a ingresar'));
alert('la cantidad de numeros ingresados es '+cantidadimpar);
function impares(){
    
    let arrayimpar=[];
    for (let i = 0; i < cantidadimpar; i++) {
        let numeroimpar=Number(prompt('ingresa numero'));
        
        if(numeroimpar % 2 ===1){
            let numimpar=numeroimpar;
            console.log('el numero '+ numimpar+ ' es impar');
        arrayimpar.push(numimpar);
        }
        
}
console.log(arrayimpar.sort());
}
impares();


