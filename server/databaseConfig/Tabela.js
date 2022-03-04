class Tabela {

    init(conexao) {
        this.conexao = conexao

        const sql = 'CREATE TABLE IF NOT EXISTS Cotacoes (id int NOT NULL AUTO_INCREMENT, moeda varchar(50) NOT NULL, cotDiaAnterior varchar(70), cotNow varchar(70), PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log("Erro ao criar ou autenticar o banco de dados.")
                console.log(erro)
            } else {
                console.log("Banco de dados operando normalmente.")
            }

        })
    }

}

module.exports = new Tabela