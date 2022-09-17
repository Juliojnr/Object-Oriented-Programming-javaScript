class Aviao {
    public nomeDoPiloto : string
    public identificacaoDoPiloto : string
    public nomeDoAviao : string
    public nomeDoFabricante : string
    public numeroDoModelo : string
    public numeroDeAssentos : number
    public velocidade : string
    public portasDeEntradaESaida : number
    public janelas : number
    public banheirosMasculino : number
    public banheirosFeminino : number
}

    const aviao = new Aviao();

        console.log('Class Avião:');
        console.log('\n');

        const nomeDoPiloto = aviao.nomeDoPiloto = 'Marcio Alvares Neto'
        const identificacaoDoPiloto = aviao.identificacaoDoPiloto = 'FKG862-000'
        const nomeDoAviao = aviao.nomeDoAviao = 'Boeing 737'
        const nomeDoFabricante = aviao.nomeDoFabricante = 'UberFlip'
        const numeroDeAssentos = aviao.numeroDeAssentos = 400
        const numeroDoModelo = aviao.numeroDoModelo = 'A3dFgkYP9870'
        const velocidade = aviao.velocidade = '250 Km/h'
        const portas = aviao.portasDeEntradaESaida = 3
        const janelas = aviao.janelas = 93
        const banheirosMasculino = aviao.banheirosMasculino = 3
        const banheirosFeminino = aviao.banheirosFeminino = 3

        console.log(`Nome do piloto: ${nomeDoPiloto}`);
        console.log(`Identificação do Piloto: ${identificacaoDoPiloto}`);
        console.log(`Nome do avião: ${nomeDoAviao}`)
        console.log(`Nome do Fabricante: ${nomeDoFabricante}`);
        console.log(`Número do modelo: ${numeroDoModelo}`);
        console.log(`Total de assentos: ${numeroDeAssentos}`);
        console.log(`Velocidade total do ${nomeDoAviao}: ${velocidade}`);
        console.log(`Total de saídas de emergência e entradas: ${portas}`);
        console.log(`Total de janelas: ${janelas}`);
        console.log(`Total de banheiros masculinos: ${banheirosMasculino}`);
        console.log(`Total de banheiros femininos: ${banheirosFeminino}`);

        console.log('\n\n');
    

