const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

console.log(texto.match(/\d/g)) // numeros
console.log(texto.match(/\D/g)) // nao numeros

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // nao caracteres [a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // espacos [ \t\n\r\f]
console.log(texto.match(/\S/g)) // nao espacos [ \t\n\r\f]

// \b \B