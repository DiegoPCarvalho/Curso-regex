const fs = require('fs');

const read = caminhoRelativo => {
    return fs.readFileSync(`${__dirname}/originais/${caminhoRelativo}`, { encoding: 'utf8'})
}

const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/alterados`
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { enconding: 'utf8'})
}

module.exports = {
    read, write
}