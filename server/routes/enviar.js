const Metodos = require("../methods/Metodos.js")

module.exports = app => {

    app.get("/buscar", (req, res) => {
        // metodo para enviar a cotacao ao frontend
        // devolver a cotacao do momento e a variação percentual em relacao à cotacao do dia anterior
        const parametros = req.body

        Metodos.enviarCotacao(parametros.moeda ,res)


    })

}