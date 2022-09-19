class Client {
    public nome: string;
    public email: string;
    public idade: number;
    public dataDeNascimento: string;

    constructor (nome: string, email: string, idade: number, dataDeNascimento: string) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.dataDeNascimento = dataDeNascimento
    }
    public changeEmail (email: string) {
        this.email = email;
    }
}
    const cliente = new Client ('Julio Cesar', 'julio123@gmail.com', 22, '21/07/2000');

    console.table(cliente);






