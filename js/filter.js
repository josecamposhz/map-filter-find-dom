// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const numeros = [1, 2, 3, 4, 5];

const numerosFiltrados = numeros.filter(numero => numero >= 2);

console.log("numerosFiltrados: ", numerosFiltrados);

// Ejemplo de lo que realiza filter utilizando un forEach
const numerosFiltradosforEach = [];
numeros.forEach(numero => {
    if (numero >= 2) {
        numerosFiltradosforEach.push(numero);
    }
});
console.log("numerosFiltrados con forEach: ", numerosFiltradosforEach);