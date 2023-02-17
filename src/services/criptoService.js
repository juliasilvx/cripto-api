const repository = require('../repositories/criptoRepository')

exports.obterMoedasService = () => {

    return repository.obterMoedasRepository();
}

exports.obterMoedaPeloIdService = (id) => {

    return repository.obterMoedaPeloIdRepository(id);
}