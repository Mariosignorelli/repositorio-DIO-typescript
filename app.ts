const pessoa = {
nome: 'Mario',
idade: 40,
profissao: 'dev-frontEnd'
}

pessoa.idade = 24;

const gabriel = ( nome:string, idade:Number, profissao:string) => {
nome: 'Gabriel';
idade: 22;
profissao:'enfermeiro';
}
const Elaine = (nome:string, idade:Number, profissao:String) => {
    nome: 'Elaine';
    idade: 42;
    profissao: 'copeira';
};

// Enum/////////////
enum Profissao{
    Professora,
    pintor,
    atriz,
    mecanico
}
interface Pessoa {
    nome:string;
    idade:Number;
    profissao?:Profissao
}
const Vanessa: Pessoa ={
    nome:'Vanessa',
    idade: 30,
    profissao: Profissao.atriz
}
interface Estudante extends Pessoa{
    materias: String[]
}
const Mayara: Estudante ={
    nome:'Mayara',
    idade:19,
    profissao:Profissao.Professora,
    materias:['html,css.js']
}
const Alex: Estudante = {
    nome:'Alex',
    idade:45,
    materias:['caulc,logica,programção']
}
 function listar(lista: String[]){
    for(const item of lista){
        console.log(' -', item)
    }
 }
 listar(Alex.materias)