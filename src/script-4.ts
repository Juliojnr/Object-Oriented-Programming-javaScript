class Funcionario {
    public nomeFuncionario : string
    public cpf : number
    public emailFuncinario : string
    public telefone : number
    public endereco : string
    public bairro : string
    public nascionalidade : string

    constructor (nomeFuncionario: string, cpf: number, emailFuncinario: string, telefone: number, endereco: string, bairro: string, nascionalidade: string ) {
        this.nomeFuncionario = nomeFuncionario;
        this.cpf = cpf;
        this.emailFuncinario = emailFuncinario;
        this.telefone = telefone;
        this.endereco = endereco;
        this.bairro = bairro;
        this.nascionalidade = nascionalidade;
    }
    public Changeendereco (endereco: string) {
        this.endereco = endereco;
    }
}
    const funcionario = new Funcionario('Felipe Jesus Dias', 12303703712,'felipedias00@gmail.com', 21968344586,'Rua sampaio correa, 23', 'Centro/Rj', 'Brasileiro' );

    console.table(funcionario);
    console.table('\n\n');

