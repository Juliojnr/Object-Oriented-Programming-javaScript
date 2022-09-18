class Funcionario {
    public nomeFuncionario : string
    public cpf : number
    public emailFuncinario : string
    public telefone : number
    public endereco : string
    public bairro : string
    public nascionalidade : string
}

    const funcionario = new Funcionario();

        console.log('Class Funcionário:');
        console.log('\n');

        const nomeFuncionario = funcionario.nomeFuncionario = 'Felipe Jesus Dias'
        const cpf = funcionario.cpf = 12303703712
        const emailFuncionario = funcionario.emailFuncinario = 'felipedias00@gmail.com'
        const telefone = funcionario.telefone = 21968344586
        const endereco = funcionario.endereco = 'Rua sampaio correa, 23'
        const bairro = funcionario.bairro = 'Centro/Rj'
        const nascionalidade = funcionario.nascionalidade = 'Brasileiro'

        console.log(`Nome do funcionário: ${nomeFuncionario}`);
        console.log(`CPF: ${cpf}`);
        console.log(`Email: ${emailFuncionario}`);
        console.log(`Número de contato: ${telefone}`);
        console.log(`Endereço: ${endereco}`);
        console.log(`Bairro: ${bairro}`);
        console.log(`Nascionalidade: ${nascionalidade}`);

        console.log('\n\n');

