const texto = 'O José é muito engraçado... hehehehehe';
console.log(texto.match(/(he)+/g))

const texto2 = 'http://www.site.info google.com.ag www.escola.ninja.br'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
