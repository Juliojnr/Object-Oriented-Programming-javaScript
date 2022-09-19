class Aviao {
    public nomeDoPiloto : string;
    public identificacaoDoPiloto : string;
    public nomeDoAviao : string;
    public nomeDoFabricante : string;
    public numeroDoModelo : string;
    public numeroDeAssentos : number;
    public velocidade : string;

    constructor (nomeDoPiloto: string, identificacaoDoPiloto: string, nomeDoAviao: string, nomeDoFabricante: string, numeroDoModelo: string,numeroDeAssentos: number, velocidade: string) {
        this.nomeDoPiloto = nomeDoPiloto;
        this.identificacaoDoPiloto = identificacaoDoPiloto;
        this.nomeDoAviao = nomeDoAviao;
        this.nomeDoFabricante = nomeDoFabricante;
        this.numeroDoModelo = numeroDoModelo;
        this.numeroDeAssentos = numeroDeAssentos;
        this.velocidade = velocidade;
    }
    public changeNamePiloto (nomeDoPiloto: string) {
        this.nomeDoPiloto = nomeDoPiloto;
    }
}
    const aviao = new Aviao ('Mario Sérgio', 'mario123@gmail.com', 'Boeing 737', 'Aeronux', 'AF14KJLL00', 400, '280 Km/h' );

        console.table(aviao);
        console.log('\n\n');
        
    

