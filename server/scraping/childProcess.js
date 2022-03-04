const { spawnSync } = require("child_process")


module.exports = () => {

    // ordena a execução do arquivo.py

    const childPython = spawnSync("python3", ["./scraping/scraping.py"])

    const resultado = (childPython.stdout.toString())

    console.log(resultado)

}
