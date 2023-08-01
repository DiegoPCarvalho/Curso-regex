const texto = 'Pedrinho (filho do Pedro Silva) e doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi))// nao e um grupo
console.log(texto.match(/([abc])/gi))//  e um grupo com conjunto
console.log(texto.match(/(abc)+-/gi))//  e um grupo