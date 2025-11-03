// crear funcion que tome un array y otros argumentos y luego elimine esos argumentos de ese array
// del array se borre ese o esos elementos y retornar los elementos restantes del array.




const sinDuplicados = function (arr){
 return [...new Set(arr)]  
 }

const yaUnete = function(arr,...elementos) {
for (supra of elementos){

let indiceEncontrado = arr.indexOf(supra)

if (indiceEncontrado !== -1)  { 
     arr.splice(indiceEncontrado,1)
}
}
return arr
};

const removeFromArray = function (arr,...elementos) {
  let remover = sinDuplicados(arr)
  return yaUnete (remover,...elementos)
}
let numeros = [1, 2, 3, 4, 1, 3, 2, 4]

console.log (removeFromArray(numeros, 2, 3,))

console.log (removeFromArray(numeros, 1, 2))

console.log ( removeFromArray(numeros, 3, 4, 1))


 // codigo del largirucho 
 
// arreglo = ["Pan", "pan","queso", "pizza","Papaya","QUESO", "queso", "tomate"];

// const removeFromArray = function (arr, ...args) {
//   for (i = arr.length; i > 0; i--) {
//     for (arg of args) {
//       const foundElm = arr.findIndex(
//         elm => {
//   if (typeof elm === "string" && typeof arg === "string") {
//     return elm.toLowerCase() === arg.toLowerCase();
//   }
//   return elm === arg;
// });
//       if (foundElm !==-1) {
//         arr.splice(foundElm, 1);
//       }
//     }
//   }
//   return arr;
// };

// console.log(removeFromArray(arreglo, "pan", "queso", "tomate"));
// console.log(arreglo);
    








module.exports = removeFromArray;
