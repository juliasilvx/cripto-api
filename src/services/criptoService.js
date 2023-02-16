const repository = require('../repositories/criptoRepository')

exports.obterMoedasService = () => {

    return repository.obterMoedaRepository();
}