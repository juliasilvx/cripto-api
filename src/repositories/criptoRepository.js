exports.obterMoedaRepository = () => {
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
        nome:"Shiba Inu",
        paridade:["aws", "unilever", "brt"],
        corretoras: ["coconut", "red", "sims"],
        precoCompraVenda: 150000.00,
        UnidadeMonetariaCompraVenda: "BRL",    
    },
    
    {
        nome:"Uniswap",
        paridade:["runaway", "tokyo", "jumper"],
        corretoras: ["newyork", "elsa", "simba"],
        precoCompraVenda: 150000.00,
        UnidadeMonetariaCompraVenda: "BRL",  
    },
    
    {
        nome:"Stellar",
        paridade:["berlim", "usa", "london"],
        corretoras: ["Yellow", "yahoo", "morning"],
        precoCompraVenda: 150000.00,
        UnidadeMonetariaCompraVenda: "BRL"
    }]
    
    return moedas;
}