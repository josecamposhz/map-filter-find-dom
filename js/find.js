// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const numeros = [1, 2, 3, 4, 5];

const search1 = numeros.find(numero => numero === 1);
const search10 = numeros.find(numero => numero === 10);
console.log("Busqueda número 1: ", search1);
console.log("Busqueda número 10: ", search10); // Nos retorna undefined

console.log("¿El número 1 está en el arreglo de números?: ", search1 != null); // true
console.log("¿El número 1 está en el arreglo de números?: ", search1 !== null); // true
console.log("¿El número 10 está en el arreglo de números?: ", search10 != null); // false
console.log("¿El número 10 está en el arreglo de números?: ", search10 !== null); // true
// A considera para search10: Si utilizamos solo "No es igual (!=)" nos retornará false, pero si utilizamos "Desigualdad estricta (!==)" nos retornará true
// Esto quiere decir que lo mejor es solo utilizar "!=" para este caso, debido a que si nos retorna un undefined y utilizamos la desigualdad estricta,
// la respuesta será true y eso nos dará a enteneder que el elemento si existe en arreglo

// Ejemplo de lo que realiza find utilizando un forEach
const search = (array, itemABuscar) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === itemABuscar) {
            searchElemente = array[i];
            return array[i];
        }
    }
}
const searchforEach1 = search(numeros, 1);
const searchforEach10 = search(numeros, 10);
console.log("Busqueda número 1 con forEach: ", searchforEach1);
console.log("Busqueda número 10 con forEach: ", searchforEach10);