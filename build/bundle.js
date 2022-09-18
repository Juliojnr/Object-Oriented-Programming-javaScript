var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var cliente = new Client();
console.log('Class Client:');
console.log('\n');
var nome = cliente.nome = 'Rafael da Silva';
var email = cliente.email = 'rafael123@gmail.com';
var idade = cliente.idade = 23;
var dataDeNascimento = cliente.dataDeNascimento = '21/07/1999';
console.log("Nome do cliente: ".concat(nome));
console.log("Email: ".concat(email));
console.log("idade do cliente: ".concat(idade));
console.log("Data de nascimento: ".concat(dataDeNascimento));
console.log('\n\n');
var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());
var aviao = new Aviao();
console.log('Class Avião:');
console.log('\n');
var nomeDoPiloto = aviao.nomeDoPiloto = 'Marcio Alvares Neto';
var identificacaoDoPiloto = aviao.identificacaoDoPiloto = 'FKG862-000';
var nomeDoAviao = aviao.nomeDoAviao = 'Boeing 737';
var nomeDoFabricante = aviao.nomeDoFabricante = 'UberFlip';
var numeroDeAssentos = aviao.numeroDeAssentos = 400;
var numeroDoModelo = aviao.numeroDoModelo = 'A3dFgkYP9870';
var velocidade = aviao.velocidade = '250 Km/h';
var portas = aviao.portasDeEntradaESaida = 3;
var janelas = aviao.janelas = 93;
var banheirosMasculino = aviao.banheirosMasculino = 3;
var banheirosFeminino = aviao.banheirosFeminino = 3;
console.log("Nome do piloto: ".concat(nomeDoPiloto));
console.log("Identifica\u00E7\u00E3o do Piloto: ".concat(identificacaoDoPiloto));
console.log("Nome do avi\u00E3o: ".concat(nomeDoAviao));
console.log("Nome do Fabricante: ".concat(nomeDoFabricante));
console.log("N\u00FAmero do modelo: ".concat(numeroDoModelo));
console.log("Total de assentos: ".concat(numeroDeAssentos));
console.log("Velocidade total do ".concat(nomeDoAviao, ": ").concat(velocidade));
console.log("Total de sa\u00EDdas de emerg\u00EAncia e entradas: ".concat(portas));
console.log("Total de janelas: ".concat(janelas));
console.log("Total de banheiros masculinos: ".concat(banheirosMasculino));
console.log("Total de banheiros femininos: ".concat(banheirosFeminino));
console.log('\n\n');
var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico() {
    }
    return ProdutoEletronico;
}());
var produtoEletronico = new ProdutoEletronico();
console.log('Class Produto Eletrônico:');
console.log('\n');
var nomeDoProduto = produtoEletronico.nomeDoProduto = 'Máquina de lavar Brastemp';
var modeloDoProduto = produtoEletronico.modeloDoProduto = 'TEMPGYF00';
var voltagem = produtoEletronico.voltagem = '220v';
var dimensoes = produtoEletronico.dimensoes = '600 x 850 x 600 mm (LxAxP)';
var cor = produtoEletronico.cor = 'Branca';
var peso = produtoEletronico.peso = '65kg';
var garantia = produtoEletronico.garantia = '12 meses';
console.log("Nome do produto: ".concat(nomeDoProduto));
console.log("Modelo do produto: ".concat(modeloDoProduto));
console.log("Tens\u00E3o/voltagem: ".concat(voltagem));
console.log("Dimens\u00F5es do produto: ".concat(dimensoes));
console.log("Cor: ".concat(cor));
console.log("Peso: ".concat(peso));
console.log("Garantia do produto: ".concat(garantia));
console.log('\n\n');
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var funcionario = new Funcionario();
console.log('Class Funcionário:');
console.log('\n');
var nomeFuncionario = funcionario.nomeFuncionario = 'Felipe Jesus Dias';
var cpf = funcionario.cpf = 12303703712;
var emailFuncionario = funcionario.emailFuncinario = 'felipedias00@gmail.com';
var telefone = funcionario.telefone = 21968344586;
var endereco = funcionario.endereco = 'Rua sampaio correa, 23';
var bairro = funcionario.bairro = 'Centro/Rj';
var nascionalidade = funcionario.nascionalidade = 'Brasileiro';
console.log("Nome do funcion\u00E1rio: ".concat(nomeFuncionario));
console.log("CPF: ".concat(cpf));
console.log("Email: ".concat(emailFuncionario));
console.log("N\u00FAmero de contato: ".concat(telefone));
console.log("Endere\u00E7o: ".concat(endereco));
console.log("Bairro: ".concat(bairro));
console.log("Nascionalidade: ".concat(nascionalidade));
console.log('\n\n');
