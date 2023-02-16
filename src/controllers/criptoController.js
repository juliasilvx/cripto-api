const service= require('../services/criptoService')

/* exports.adiconarMoeda = (req, res) => {
}

exports.alterarMoeda = (req, res) => {
} */

exports.obterMoeda = (req,res) => {
    res.status(201).send(service.obterMoedasService())
}
/* 
exports.obterMoeda = (req, res) => {    
}

exports.deletarMoeda = (req, res) => {
} */