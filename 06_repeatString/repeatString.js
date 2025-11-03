//primer paso crear una funcion que reciba los parametros 
// palabra y veces
//segundo paso repetir la palabra y juntarlo todo la cantidad de veces pasada por argumento

let suma = " "

const repeatString = function(palabra, veces) {

for (let i = 0; i < veces; i++) {
 suma += palabra 
}
return suma
};

console.log(repeatString("pilin", 10))

















// Do not edit below this line
module.exports = repeatString;
