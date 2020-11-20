// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const numeros = [1, 2, 3, 4, 5];
console.log("Arreglo inicial: ", numeros);

const numerosPorDos = numeros.map( (numero, index) => numero * index); // 2, 4, 6, 8, 10
console.log("numerosPorDos", numerosPorDos);

const cuadrado = (num) => Math.pow(num, 2);
const numerosCuadrados = numeros.map( (numero) => cuadrado(numero)); // 2, 4, 6, 8, 10
console.log("numerosCuadrados", numerosCuadrados);


// Ejemplo de lo que realiza map utilizando un forEach
const numerosPorDosforEach = [];
numeros.forEach(numero => {
    numerosPorDosforEach.push(numero * 2);
});
console.log("numerosPorDos con forEach", numerosPorDosforEach);

const numerosCuadradosforEach = [];
numeros.forEach(numero => {
    numerosCuadradosforEach.push(cuadrado(numero));
});
console.log("numerosCuadrados con forEach", numerosCuadradosforEach)