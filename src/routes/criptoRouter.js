const express = require('express');
const router = express.Router();
const controller = require('../controllers/criptoController')

//router.post('/adiciona-moeda', controller.adicionaMoeda)
router.get('/obter-moedas', controller.obterMoedas)
router.get('/obter-moeda/peloId', controller.obterMoedaPeloId)
//router.delete('/deleta-moeda', controller.deletaMoeda)
//router.put('/altera-moeda', controller.alteraMoeda)

module.exports = router;