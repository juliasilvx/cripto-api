const express = require('express');
const router = express.Router();
const controller = require('../controllers/criptoController')

//router.post('/adicionar-moeda', controller.adicionarMoeda)
router.get('/obter-moeda', controller.obterMoeda)
//router.delete('/deletar-moeda', controller.deletarMoeda)
//router.put('/alterar-moeda', controller.alterarMoeda)

module.exports = router;

