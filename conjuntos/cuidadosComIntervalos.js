const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // n'ao define um (range)

console.log(texto.match(/[A-z]/g)) // intervalos usam a ordem da tabela UNICODE
// console.log(texto.match(/[A-9]/g)) // nao funciona

//tem que respeitar a ordem da tabela Unicode
// console.log(texto.match(/[a-Z] ou [9-1]/g)) // gera erro expressao invalida


