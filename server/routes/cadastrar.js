const Metodos = require("../methods/Metodos.js")

module.exports = app => {

    app.post("/cadastro", (req, res) => {
        
        const moeda = req.body.moeda

        Metodos.adicionarMoeda(moeda, res)

    })

}