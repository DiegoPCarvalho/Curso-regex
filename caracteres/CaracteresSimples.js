const texto = '1,2,3,4,5,6,a.b c!d?e'

const regex = /,/

console.log(texto.split(regex))
console.log(texto.match(regex))

console.log(texto.match(/,/g))
console.log(texto.match(/A/g))
console.log(texto.match(/A/gi))
console.log(texto.match(/2/g))
console.log(texto.match(/b c!d/g))
