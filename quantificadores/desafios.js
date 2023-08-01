//DesafioCPF
const texto = 
`CPF dos aprovados: 
    - 600.567.890-12
    - 765.998.345-23
    - 564.563.582-86
    - 569.369.258-96
`
console.log('Desafio 1:')
console.log(texto.match(/\d.+/g))
console.log('ou')
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))
console.log('')

//desafio telefone
const texto2 =
`Lista de telefonica:
    - (11) 98756-1212
    - 98765-4321
    - (21) 99980-0025
    - (77)3261-8899`

console.log('Desafio 2:')
console.log(texto2.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g))
console.log('')

//desafio email
const texto3 = 
`Os e-mails dos conv/idados sao:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com`

console.log('Desafio 3:')
console.log(texto3.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.?[a-zA-Z]+\.?[a-zA-Z]+/g))
console.log(texto3.match(/\w+@\w+\.\w{2,4}/g))
console.log(texto3.match(/[\w.]+@\w+\.\w{2,4}/g))
console.log(texto3.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))
console.log('')

//no futuro
console.log('futuro')
console.log(texto3.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))