const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-Ú]+/gi))

//Positive lookahead
console.log(texto.match(/[\wÀ-Ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-Ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-Ú]+(?=, mas)/gi))

//Negative lookahead
console.log(texto.match(/[\wÀ-Ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-Ú]+\b(?!\.)/gi))
console.log(texto.match(/[\wÀ-Ú]+\b(?!, mas)/gi))
console.log(texto.match(/[\wÀ-Ú]+[\s|\.](?!,-)/gi))
