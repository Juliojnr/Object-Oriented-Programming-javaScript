class Client {
    public nome: string;
    public email: string;
    public idade: number;
    public dataDeNascimento: string;
}

    const cliente = new Client();

    const nome = cliente.nome = 'Julio Cesar';
    const email = cliente.email = 'juliocgcj@hotmail.com';
    const idade = cliente.idade = 22;
    const dataDeNascimento = cliente.dataDeNascimento = '21/07/2000'

    console.log(`Nome do cliente: ${nome}`);
    console.log(`Email do cliente: ${email}`);
    console.log(`idade do cliente: ${idade}`);
    console.log(`Data de nascimento do cliente: ${dataDeNascimento}`);






