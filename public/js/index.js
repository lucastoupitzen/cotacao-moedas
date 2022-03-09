$ (
    function() {
        requisiçãoDolar()
        requisiçãoEuro()
        requisiçãoLibra()
    }
)

function requisiçãoDolar() {

    const dados = {
        "moeda": "dolar"
    }

    envioRequisição(dados)

}

function requisiçãoEuro() {

    const dados = {
        "moeda": "euro"
    }

    envioRequisição(dados)

}

function requisiçãoLibra() {

    const dados = {
        "moeda": "libra"
    }

    envioRequisição(dados)

}

function envioRequisição(dados) {

    let moeda = dados.moeda

    $.get("/buscar", dados, (data) => {
        $(`#${moeda}-dia-anterior`).text('R$ ' + data.cotacaoAnterior)
        $(`#${moeda}-agora`).text('R$ ' + data.cotacao)
        calculaVariacao(data.cotacao, data.cotacaoAnterior, moeda)
    }).always(() => {
    setInterval(() => {
    $.get("/buscar", dados, (data) => {
        $(`#${moeda}-dia-anterior`).text('R$ ' + data.cotacaoAnterior)
        $(`#${moeda}-agora`).text('R$ ' + data.cotacao)
        calculaVariacao(data.cotacao, data.cotacaoAnterior, moeda)
    })}, 60000)
    })

}

function calculaVariacao(atual, ontem, moeda) {
    let valorVariacao = (1 - atual/ontem)
    const tagVariacao = $(`#${moeda}-variacao`)
    if(valorVariacao > 0) {
        tagVariacao.css("color", "#87FF65")
    } else {
        tagVariacao.css("color", "#F26157")
    }
    let variacao = `${valorVariacao.toFixed(5)* 100}`
    variacao = variacao.substring(0,5) + "%"
    tagVariacao.text(variacao)
}