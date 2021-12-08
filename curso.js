let Aluno = require('./aluno')

// objeto literal curso (Passo 3):

let curso = {
    nome: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 2,
    listaEstudantes: [],
    // Passo 4
    adicionarAluno: function(...objetoAluno) {
        this.listaEstudantes.push(...objetoAluno)
    },
    // Passo 5
    aprovarAluno: function(aluno) {
        let mediaDoAluno = aluno.calcularMedia()
        if (aluno.faltas < this.faltasMaximas && mediaDoAluno >= this.notaAprovacao) {
            return true;
        } else if (aluno.faltas == this.faltasMaximas && mediaDoAluno >= this.notaAprovacao*1.1) {
            return true;
        } else {
            return false;
        }
    },
    // Passo 6
    listarAprovacoes: function() {
        let listaDeAprovados = [];
        this.listaEstudantes.forEach(elemento => {
            listaDeAprovados.push(this.aprovarAluno(elemento))
        })
        return listaDeAprovados
    }
}

module.exports = curso;