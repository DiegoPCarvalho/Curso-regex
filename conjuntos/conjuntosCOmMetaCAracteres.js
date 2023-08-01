const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g))//nao precisa de escape dentro do conjunto

console.log(texto.match(/[$-?]/g))//isso e um intervalo (range)

//Nao e um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

//pode precisar de escape dentro do conjunto: - [ ] ^