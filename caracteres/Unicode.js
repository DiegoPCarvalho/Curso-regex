// no inicio...
//Um byte (8 bits) - 256 caracteres
//Simbolos, Pontuacao, A-Z, a-z, 0-9

//Dois Bytes (16 bites) - 65500+ caracteres
//+Simbolos, +Pointuacao, A-Z, a-z, 0-9

//Unicode
//Quantidade de Bytes Variavel - Expansivel
//Suporta mais de 1 Milhao carecteres
//Atualmente tem mais de 100.000 carecteres atribuidos

//https://unicode-table.com/pt/

const texto = 'aʬc௵'
console.log(texto.match(/\u02AC|\u0BF5/g))