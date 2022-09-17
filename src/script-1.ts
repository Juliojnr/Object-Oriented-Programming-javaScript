class Client {
    public nome: string;
    public email: string;
    public idade: number;
    public dataDeNascimento: string;
}

    const cliente = new Client();

        console.log('Class Client:');
        console.log('\n');

        const nome = cliente.nome = 'Rafael da Silva';
        const email = cliente.email = 'rafael123@gmail.com';
        const idade = cliente.idade = 23;
        const dataDeNascimento = cliente.dataDeNascimento = '21/07/1999'

        console.log(`Nome do cliente: ${nome}`);
        console.log(`Email: ${email}`);
        console.log(`idade do cliente: ${idade}`);
        console.log(`Data de nascimento: ${dataDeNascimento}`);

        console.log('\n\n');






