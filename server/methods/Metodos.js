const conexao = require("../databaseConfig/conexao.js")

class Metodos {

    atualizar(moeda, cotacao) {

        let hora = new Date

        // se está fora do horário comercial

        if(hora.getHours() >= 17 || hora.getHours() < 9) {

            const sql = `UPDATE Cotacoes SET cotDiaAnterior = "${cotacao}" WHERE moeda = "${moeda}"`

            conexao.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log(resultado)
                }
            })

        } else {

            // se está dentro do horário comercial

            const sql = `UPDATE Cotacoes SET cotNow = "${cotacao}" WHERE moeda = "${moeda}"`

            conexao.query(sql, (erro, resultado) => {
                if(erro) {
                    console.log(erro)
                } else {
                    console.log(resultado)
                }
            })
        }


    }

    adicionarMoeda(moeda, res) {

        const sql = `INSERT INTO Cotacoes SET ?`

        let lista = {
            moeda,
            cotDiaAnterior: "-",
            cotNow: "-"
        }

        conexao.query(sql, lista, (erro, resultado) => {

            if(erro) {
                console.log(erro)
            } else{
                res.send("Moeda adicionada com sucesso")
            }

        })

    }

}

module.exports = new Metodos