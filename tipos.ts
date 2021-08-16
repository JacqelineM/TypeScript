//boolean
const contaPaga: boolean = false;

//number
const idade: number  = 23;
const avaliacao = 4.5;

//string
const nome: string = 'Jacqueline Mendes';

//array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 345, 456, 43];

//tuple
let jogadores: [string, number, boolean];
jogadores = ['Jacquelne', 3, true];

//enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//any - tira a tipagem do typescript
const retornoDaAPI: any[] = [123, 'Jacqueline', false];
const retornoDaAPI2: any = {
    //.......
};

//void função que não te retorno
function printarNaTela(msg: string): void{
    console.log(msg);
}

//null e undefined
const u: undefined = undefined;
const n: null = null;

//object passaa o objeto sem tipagem
function criar(objecto: object){
    //.....
}
criar({
    propriedade: 1,
})

// criar('Jacqueline') // se eu tentar passar co tipagem igual está entre () que é uma string dá erro

//never
function loopInfinito(): never{ //função que não tem um ponto final alcançável - loop infinito
    while (true){ }
}

function erro(mensagem: string) : never{ // o tipo de retorno é never
    throw new Error(mensagem);
}

function falha(){ // a função retorna o erro meso sem precisar tipar com never, o TS identifica como never
    return erro('Algo falhou');
}


//union Types que tem mais de um tipo
const nota: string | number = 5;

function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);

//alias
type Funcionario = {
  nome: string;
  sobrenome: string;
  dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Jacqueline',
    sobrenome: 'Mendes',
    dataNascimento: new Date()
}, {
    nome: 'Jacqueline2',
    sobrenome: 'Mendes',
    dataNascimento: new Date()

}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do fincionário: ', funcionario.nome)
    }
}

//nulo opcionais

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?:string;//o ? serve para dizer qu ele pode sr null e string   
}
const contato: Contato = {
    nome: 'Jacqueline',
    telefone1: '1393483',
}

//type assertion -   quando vc define no código o que determina a variável
const minhaIdade: any = 23;
(minhaIdade as number).toString(); //ou
//(<number>minhaIdade).toString(); 

//const input = document.getElementById("numero1") as HTMLInputElement; ou
const input = <HTMLInputElement> document.getElementById("numero1");
console.log(input.value);