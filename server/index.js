const customExpress = require("./customExpress.js")
const conexao = require("./databaseConfig/conexao.js")
const Tabela = require("./databaseConfig/Tabela.js")
const ordemScraping = require("./scraping/childProcess.js")

conexao.connect( async (erro) => {
    
    if(erro) {
        console.log(erro)
    } else {

        const app = customExpress()

        Tabela.init(conexao)

        app.listen(3000, () => {
            console.log("Servidor operando na porta 3000.")

            //execução periódica do scraping(Python)

            // ordemScraping()
            // setInterval(() => {
            //     ordemScraping()
            // }, 4000)

           
        })



        

    }

})