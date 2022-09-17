class ProdutoEletronico {
    public nomeDoProduto : string
    public modeloDoProduto : string
    public voltagem : string
    public dimensoes : string
    public cor : string
    public peso : string
    public garantia : string
}

    const produtoEletronico = new ProdutoEletronico();

        console.log('Class Produto Eletrônico:');
        console.log('\n');

        const nomeDoProduto = produtoEletronico.nomeDoProduto = 'Máquina de lavar Brastemp'
        const modeloDoProduto = produtoEletronico.modeloDoProduto = 'TEMPGYF00'
        const voltagem = produtoEletronico.voltagem = '220v'
        const dimensoes = produtoEletronico.dimensoes = '600 x 850 x 600 mm (LxAxP)'
        const cor = produtoEletronico.cor = 'Branca'
        const peso = produtoEletronico.peso = '65kg'
        const garantia = produtoEletronico.garantia = '12 meses'

        console.log(`Nome do produto: ${nomeDoProduto}`);
        console.log(`Modelo do produto: ${modeloDoProduto}`);
        console.log(`Tensão/voltagem: ${voltagem}`);
        console.log(`Dimensões do produto: ${dimensoes}`);
        console.log(`Cor: ${cor}`);
        console.log(`Peso: ${peso}`);
        console.log(`Garantia do produto: ${garantia}`);

        console.log('\n\n');