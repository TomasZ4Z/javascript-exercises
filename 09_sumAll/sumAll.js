const sumAll = function(inicio,fin) {   

    if (inicio>fin) {
temp = inicio
inicio = fin
fin = temp
console.log(inicio,"y",fin)
}

if (Number.isInteger(inicio) && Number.isInteger(fin)&& inicio>=0 && fin>=0){
let resultado = 0
for (let i = inicio; i <= fin; i++){

 resultado = resultado + i
    
 console.log (i)
 }   
return resultado 
}  
else { 
return ("ERROR")
}


}
  







console.log (sumAll(4,-7))


// Do not edit below this line
module.exports = sumAll;
