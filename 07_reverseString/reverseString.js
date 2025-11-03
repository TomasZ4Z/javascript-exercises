const reverseString = function(word) {
let almacen = word.split("")    .reverse()      .join("")
return almacen

};

// Do not edit below this line
module.exports = reverseString;
console.log(reverseString("juanetes"))