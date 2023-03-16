const sql = require('../../bin/executorQuery')
const { query } = require('express')
// exports.adiconarMoeda = (req, res) => {

// }

exports.alterarMoeda = (req, res) => {

    var preco = req.body.preco
    var descricao = req.body.descricao
    let id = parseInt(req.body.id);

    var query = `UPDATE moedas SET PRECO_COMPRA_VENDA=${preco}, DESCRICAO="${descricao}" WHERE ID_MOEDA = ${id}`

    return sql.execSQLQuery(query, res)

}

exports.obterMoedas = (req, res) => {

    var query = `SELECT
    moedas.NOME AS 'nomeMoeda',
    moedas.PRECO_COMPRA_VENDA AS 'preco',
    moedas.DESCRICAO AS 'descricao',
    paridades.nome AS 'paridade'
    FROM 
    moedas
    INNER JOIN moedas_has_paridades
    ON 
    moedas.ID_MOEDA = moedas_has_paridades.MOEDAS_ID_MOEDA
    INNER JOIN paridades
    ON
    paridades.ID_PARIDADE = moedas_has_paridades.PARIDADES_ID_PARIDADE`

    return sql.execSQLQuery(query, res)
}

exports.obterMoedaPeloId = (req, res) => {
    
    let id = parseInt(req.query.id);

    var query = `SELECT
    moedas.NOME AS 'nomeMoeda',
    moedas.PRECO_COMPRA_VENDA AS 'preco',
    moedas.DESCRICAO AS 'descricao',
    paridades.nome AS 'paridade'
    FROM 
    moedas
    INNER JOIN moedas_has_paridades
    ON 
    moedas.ID_MOEDA = moedas_has_paridades.MOEDAS_ID_MOEDA
    INNER JOIN paridades
    ON
    paridades.ID_PARIDADE = moedas_has_paridades.PARIDADES_ID_PARIDADE
    WHERE moedas.ID_MOEDA = ${id}`
    
    return sql.execSQLQuery(query, res)
}

// exports.deletarMoeda = (req, res) => {

// }