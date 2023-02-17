exports.obterMoedaPeloIdRepository = (id) => {
  
    /* Simulando o nosso banco de dados */
    let moedas = [{
        id: 1,
        nome: "Bitcoin",
        paridade: ["Ethereum", "Tether", "BNB"],
        corretoras: ["Binance", "Cracken", "CoinBase"],
        precoCompraVenda: 200000.00,
        unidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 2,
        nome: "JulixCoin",
        paridade: ["Ethereum", "Tether", "BNB"],
        corretoras: ["Binance", "Cracken", "vasco"],
        precoCompraVenda: 200000.00,
        unidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 3,
        nome: "Elacoin",
        paridade: ["bot", "flu", "fla"],
        corretoras: ["ok", "ela", "ele"],
        precoCompraVenda: 300000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."

    },
    {
        id: 4,
        nome: "Elecoin",
        paridade: ["EUA", "BR", "ARG"],
        corretoras: ["chile", "bol", "uru"],
        precoCompraVenda: 500000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 5,
        nome: "Fulanocoin",
        paridade: ["colombia", "peru", "ven"],
        corretoras: ["equa", "catar", "fy"],
        precoCompraVenda: 800000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    }]

       /* Buscando a moeda selecionada (parametro: id) com
    find */
    let moedaSelecionada = moedas.find(moeda => moeda.id == id);
    
    return moedaSelecionada;
}

exports.obterMoedasRepository = () => {
    // Nome da moeda
    // Nome: string

    // As moedas que podem fazer troca
    // Paridade: string[] 

    // Os bancos que podem operar
    // Corretoras: string[]

    // Breve descrição da moeda
    // Descricao: string

    // Preco para compra e venda da moeda
    // PrecoCompraVenda: float

    // Unidade monetaria para compra e venda
    // UnidadeMonetariaCompraVenda: string

    let moedas = [{
        id: 1,
        nome: "Bitcoin",
        paridade: ["Ethereum", "Tether", "BNB"],
        corretoras: ["Binance", "Cracken", "CoinBase"],
        precoCompraVenda: 200000.00,
        unidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 2,
        nome: "JulixCoin",
        paridade: ["Ethereum", "Tether", "BNB"],
        corretoras: ["Binance", "Cracken", "vasco"],
        precoCompraVenda: 200000.00,
        unidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 3,
        nome: "Elacoin",
        paridade: ["bot", "flu", "fla"],
        corretoras: ["ok", "ela", "ele"],
        precoCompraVenda: 300000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."

    },
    {
        id: 4,
        nome: "Elecoin",
        paridade: ["EUA", "BR", "ARG"],
        corretoras: ["chile", "bol", "uru"],
        precoCompraVenda: 500000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    },
    {
        id: 5,
        nome: "Fulanocoin",
        paridade: ["colombia", "peru", "ven"],
        corretoras: ["equa", "catar", "fy"],
        precoCompraVenda: 800000.00,
        UnidadeMonetariaCompraVenda: "BRL",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat lectus, cursus in odio vel, ultricies tincidunt odio."
    }]

    return moedas;
}