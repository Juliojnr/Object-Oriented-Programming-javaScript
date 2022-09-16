var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var cliente = new Client();
var nome = cliente.nome = 'Julio';
var email = cliente.email = 'juliocgcj@hotmail.com';
var idade = cliente.idade = 22;
var dataDeNascimento = cliente.dataDeNascimento = '21/07/2000';
console.log("Nome do cliente: ".concat(nome));
console.log("Email do cliente: ".concat(email));
console.log("idade do cliente: ".concat(idade));
console.log("Data de nascimento do cliente: ".concat(dataDeNascimento));
