//El objetivo de este ejercicio es crear una calculadora que realice las siguientes
//  operaciones:

//sumar, restar, calcular la suma, multiplicar, calcular la potencia y hallar 
// el factorial.

//Para ello, implementa tu solución en cada función. Asegúrate de devolver el 
// valor para poder probarla en Jest. Para ver el valor esperado,

//consulta el archivo de especificaciones que contiene los casos de prueba de Jest.





const add = function(a, b) {

 return a + b 
 
};

const subtract = function(a,b) {
	return a - b  
};  

const sum = function(array) {

   
  return array.reduce((a, b) => {
  a += b
  return a
  },0)
 
	
};

const multiply = function(array) {
 return array.reduce((a, b) => {
  a *= b
  return a
  },1)
 
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
 
 let f = 1
for (i = a; i>=1; i--){
f *= i
 
}


	return  f 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
