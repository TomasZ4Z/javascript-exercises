//Crea una función que devuelva un número específico de la secuencia de Fibonacci:
// Una serie de números en la que cada número (número de Fibonacci) es la suma de los dos números anteriores.
 //En este ejercicio, la secuencia de Fibonacci utilizada es 1, 1, 2, 3, 5, 8, etc.
 //Para obtener más información sobre la secuencia de Fibonacci, visita: https://en.wikipedia.org/wiki/Fibonacci_sequence

const fibonacci = function(number) {
if (number < 0 ) {
    return "OOPS"
}

let first = 0
let second= 1  
for (i = 0; i < number;i++){
actual = first
first = second 
 second = first + actual


console.log(actual)

}

return first
};

console.log(fibonacci(8))

// Do not edit below this line
module.exports = fibonacci;
