// Escribe dos funciones que conviertan temperaturas de Fahrenheit a Celsius y viceversa:

// convertToCelsius(32) // Fahrenheit a Celsius, debería devolver 0

// convertToFahrenheit(0) // Celsius a Fahrenheit, debería devolver 32

// El resultado debe devolver a un solo decimal 


const convertToCelsius = function(Fahrenheit) {
let calculo = ((Fahrenheit-32)*(5/9))
undecimal = (Math.round(calculo*10)/10 )
return undecimal
};

const convertToFahrenheit = function(Celsius) {
let calculo = (Celsius * 9/5 + 32)
undecimal = Math.round(calculo*10)/10  
return undecimal
};


console.log (convertToCelsius(32))
console.log (convertToFahrenheit(-10))
console.log (convertToCelsius(10))
console.log (convertToFahrenheit(30))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
