const { spawnSync } = require("child_process")
const Metodos = require("../methods/Metodos.js")



module.exports = () => {

    // ordena a execução do arquivo.py

    var listaResultados = []

    // Procura cotacao do dólar

    const childPythonDolar = spawnSync("python3", ["./scraping/scraping_dolar.py"])

    listaResultados.push(childPythonDolar.stdout.toString())

    // Procura cotacao do euro

    const childPythonEuro = spawnSync("python3", ["./scraping/scraping_euro.py"])

    listaResultados.push(childPythonEuro.stdout.toString())

    // Procura cotacao libra

    const childPythonLibra = spawnSync("python3", ["./scraping/scraping_libra.py"])

    listaResultados.push(childPythonLibra.stdout.toString())

    for(resultado in listaResultados) {
        
        for(letra in listaResultados[resultado]) {

            if(listaResultados[resultado][letra] == "-"){

                // capta a moeda passada na string

                let moeda = listaResultados[resultado].substring(0, letra)
                
                // capta a cotacao passada na string
    
                letra++
    
                let cotacao = listaResultados[resultado].substring(letra, listaResultados[resultado].length)
    
                Metodos.atualizar(moeda, cotacao)
            }
        }
    }




}
