const express = require('express');
const router = express.Router();
const controller = require('../controllers/criptoController')

//router.post('/adiciona-moeda', controller.adicionaMoeda)
router.get('/api/cripto/obter-moeda', controller.obterMoedas)
router.get('/api/cripto/obter-moeda/peloid?id=', controller.obterMoedaPeloId)
//router.delete('/deleta-moeda', controller.deletaMoeda)
//router.put('/altera-moeda', controller.alteraMoeda)

module.exports = router;