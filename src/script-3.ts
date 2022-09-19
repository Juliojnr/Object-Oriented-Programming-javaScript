class ProdutoEletronico {
    public nomeDoProduto : string;
    public modeloDoProduto : string;
    public voltagem : string;
    public dimensoes : string;
    public cor : string;
    public peso : string;
    public garantia : string;

    constructor (nomeDoProduto: string, modeloDoProduto: string, voltagem: string, dimensoes: string, cor: string, peso: string, garantia: string) {
        this.nomeDoProduto = nomeDoProduto;
        this.modeloDoProduto = modeloDoProduto;
        this.voltagem = voltagem;
        this.dimensoes = dimensoes;
        this.cor = cor;
        this.peso = peso;
        this.garantia = garantia;
    }
    public Changevoltagem (voltagem: string) {
        this.voltagem = voltagem;
    }
}

    const produtoEletronico = new ProdutoEletronico('Máquina de lavar Brastemp', 'TEMPGYF00', '220v', '600 x 850 x 600 mm (LxAxP)', 'Branca', '65kg', '12 meses' );

        console.table(produtoEletronico);
        console.log('\n\n');