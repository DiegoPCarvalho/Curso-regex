const texto1 = 'de longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> um ou mais (opcional)
const regex = /fogo+/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os numeros: 0123456789.'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))