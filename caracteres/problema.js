const texto = 'Bom\ndia'
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi))//o ponto nao engloba o \n

//dotall - alguns tem um flag /exps/s mas JS nao!
