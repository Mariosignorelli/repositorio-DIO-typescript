"use strict";
const pessoa = {
    nome: 'Mario',
    idade: 40,
    profissao: 'dev-frontEnd'
};
pessoa.idade = 24;
const gabriel = (nome, idade, profissao) => {
    nome: 'Gabriel';
    idade: 22;
    profissao: 'enfermeiro';
};
const Elaine = (nome, idade, profissao) => {
    nome: 'Elaine';
    idade: 42;
    profissao: 'copeira';
};
// Enum/////////////
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["pintor"] = 1] = "pintor";
    Profissao[Profissao["atriz"] = 2] = "atriz";
    Profissao[Profissao["mecanico"] = 3] = "mecanico";
})(Profissao || (Profissao = {}));
const Vanessa = {
    nome: 'Vanessa',
    idade: 30,
    profissao: Profissao.atriz
};
const Mayara = {
    nome: 'Mayara',
    idade: 19,
    profissao: Profissao.Professora,
    materias: ['html,css.js']
};
const Alex = {
    nome: 'Alex',
    idade: 45,
    materias: ['caulc,logica,programção']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' -', item);
    }
}
listar(Alex.materias);
