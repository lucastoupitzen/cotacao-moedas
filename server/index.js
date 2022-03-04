const customExpress = require("./customExpress.js")
const conexao = require("./databaseConfig/conexao.js")
const Tabela = require("./databaseConfig/Tabela.js")

conexao.connect( (erro) => {
    
    if(erro) {
        console.log(erro)
    } else {

        const app = customExpress()

        Tabela.init(conexao)

        app.listen(3000, () => {
            console.log("Servidor operando na porta 3000.")
        })

        //execução periodica do scraping(Python)

    }

})