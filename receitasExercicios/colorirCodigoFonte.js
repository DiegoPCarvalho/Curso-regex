const aplicarCor = (text, reg, cor) => text.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./files');
const texto = files.read('codigoFonte.html')

const codeRegex = /<code>[\s\S]*<\/code>/i
let codigo = texto.match(codeRegex)[0]

// Strings...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178')

//Palavras reservadas..
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf')

//Tipos ...
codigo = aplicarCor(codigo, /\b(void|int)/g, '1385e2')

//comentarios de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//comentario de uma linha
codigo = aplicarCor(codigo, /(\/\/ Porta de entrada de um programa Java)/g, '267703') // /(\/\/.*?\n)/g nao funcionou



const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)