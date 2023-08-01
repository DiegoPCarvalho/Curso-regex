const texto = `
Leo e muito legal
Emmanuel foi jogar em sergipe
Bianca e casada com Habib
`

console.log(texto.match(/\n/gi))
console.log(texto.match(/^(\w).+\1$/gi))
console.log(texto.match(/^(\w).+\1$/gim))