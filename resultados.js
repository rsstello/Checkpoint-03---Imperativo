//Passo 7

//"Importando a função construtora de aluno (estudantes):"
let Aluno = require('./aluno');

//"Importando o objeto literal curso:"
let curso = require('./curso')

let rodrigo = new Aluno('Rodrigo Escobar', 0, [9, 9, 8, 7])
let ruggiero = new Aluno('Ruggiero Stello', 1, [9, 10, 9, 10])
let marcos = new Aluno('Marcos Fonseca', 2, [7, 9, 8, 8])
let geyson = new Aluno('Geyson Kaio', 4, [6, 7, 5, 7])
let guilherme = new Aluno('Guilherme Carvalho', 1, [5, 5, 8, 6])
let cecilia = new Aluno('Cecilia Valim', 1, [9, 7, 9, 6])

//teste se o metodo calcularMedia esta funcionando:
// console.log(ruggiero.calcularMedia()) 

//teste se o metodo adicionarFalta esta funcionando:
// rodrigo.adicionarFalta()
// console.log(ruggiero.faltas) 


// teste se o metodo adicionarAluno esta funcionando:
// curso.adicionarAluno(ruggiero);
// console.log(curso.listaEstudantes); 

//teste se o metodo adicionarAluno  adiciona varios alunos de uma vez esta funcionando:
// console.log(curso);
// curso.adicionarAluno(rodrigo, ruggiero, marcos, geyson, guilherme, cecilia);
// console.log(curso.listaEstudantes);

resultado = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaEstudantes.forEach((elemento) => resultado(elemento));

resultado(ruggiero)