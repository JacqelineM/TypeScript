"use strict";
//boolean
var contaPaga = false;
//number
var idade = 23;
var avaliacao = 4.5;
//string
var nome = 'Jacqueline Mendes';
//array
var idades = [23, 28, 45];
var idades2 = [23, 345, 456, 43];
//tuple
var jogadores;
jogadores = ['Jacquelne', 3, true];
//enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//any - tira a tipagem do typescript
var retornoDaAPI = [123, 'Jacqueline', false];
var retornoDaAPI2 = {
//.......
};
//void função que não te retorno
function printarNaTela(msg) {
    console.log(msg);
}
//null e undefined
var u = undefined;
var n = null;
//object passaa o objeto sem tipagem
function criar(objecto) {
    //.....
}
criar({
    propriedade: 1,
});
// criar('Jacqueline') // se eu tentar passar co tipagem igual está entre () que é uma string dá erro
//never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//union Types que tem mais de um tipo
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Jacqueline',
        sobrenome: 'Mendes',
        dataNascimento: new Date()
    }, {
        nome: 'Jacqueline2',
        sobrenome: 'Mendes',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do fincionário: ', funcionario.nome);
    }
}
//nulo opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Jacqueline',
    telefone1: '1393483',
};
//type assertion -   quando vc define no código o que determina a variável
var minhaIdade = 23;
minhaIdade.toString(); //ou
//(<number>minhaIdade).toString(); 
//const input = document.getElementById("numero1") as HTMLInputElement; ou
var input = document.getElementById("numero1");
console.log(input.value);
