const palindromes = function (palabra) {

const abc09 = ("abcdefghijklmnopqsrtuvwyz0123456789")  


let filtered = palabra 
.toLowerCase().split ("").filter((item) => abc09.includes(item)).join("")

 let box = filtered.split("").reverse().join("")    


console.log(filtered)
console.log(box)

 return    (filtered === box) 





};

palindromes("!racecar")


// Do not edit below this line
module.exports = palindromes;
