var Client = /** @class */ (function () {
    function Client(nome, email, idade, dataDeNascimento) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.dataDeNascimento = dataDeNascimento;
    }
    Client.prototype.changeEmail = function (email) {
        this.email = email;
    };
    return Client;
}());
var cliente = new Client('Julio Cesar', 'julio123@gmail.com', 22, '21/07/2000');
console.table(cliente);
var Aviao = /** @class */ (function () {
    function Aviao(nomeDoPiloto, identificacaoDoPiloto, nomeDoAviao, nomeDoFabricante, numeroDoModelo, numeroDeAssentos, velocidade) {
        this.nomeDoPiloto = nomeDoPiloto;
        this.identificacaoDoPiloto = identificacaoDoPiloto;
        this.nomeDoAviao = nomeDoAviao;
        this.nomeDoFabricante = nomeDoFabricante;
        this.numeroDoModelo = numeroDoModelo;
        this.numeroDeAssentos = numeroDeAssentos;
        this.velocidade = velocidade;
    }
    Aviao.prototype.changeNamePiloto = function (nomeDoPiloto) {
        this.nomeDoPiloto = nomeDoPiloto;
    };
    return Aviao;
}());
var aviao = new Aviao('Mario Sérgio', 'mario123@gmail.com', 'Boeing 737', 'Aeronux', 'AF14KJLL00', 400, '280 Km/h');
console.table(aviao);
console.log('\n\n');
var ProdutoEletronico = /** @class */ (function () {
    function ProdutoEletronico(nomeDoProduto, modeloDoProduto, voltagem, dimensoes, cor, peso, garantia) {
        this.nomeDoProduto = nomeDoProduto;
        this.modeloDoProduto = modeloDoProduto;
        this.voltagem = voltagem;
        this.dimensoes = dimensoes;
        this.cor = cor;
        this.peso = peso;
        this.garantia = garantia;
    }
    ProdutoEletronico.prototype.Changevoltagem = function (voltagem) {
        this.voltagem = voltagem;
    };
    return ProdutoEletronico;
}());
var produtoEletronico = new ProdutoEletronico('Máquina de lavar Brastemp', 'TEMPGYF00', '220v', '600 x 850 x 600 mm (LxAxP)', 'Branca', '65kg', '12 meses');
console.table(produtoEletronico);
console.log('\n\n');
var Funcionario = /** @class */ (function () {
    function Funcionario(nomeFuncionario, cpf, emailFuncinario, telefone, endereco, bairro, nascionalidade) {
        this.nomeFuncionario = nomeFuncionario;
        this.cpf = cpf;
        this.emailFuncinario = emailFuncinario;
        this.telefone = telefone;
        this.endereco = endereco;
        this.bairro = bairro;
        this.nascionalidade = nascionalidade;
    }
    Funcionario.prototype.Changeendereco = function (endereco) {
        this.endereco = endereco;
    };
    return Funcionario;
}());
var funcionario = new Funcionario('Felipe Jesus Dias', 12303703712, 'felipedias00@gmail.com', 21968344586, 'Rua sampaio correa, 23', 'Centro/Rj', 'Brasileiro');
console.table(funcionario);
console.table('\n\n');
