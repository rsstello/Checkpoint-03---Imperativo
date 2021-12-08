
let Aluno = function(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        return this.notas.reduce((acumulador, elemento) => acumulador + elemento)/this.notas.length
    };
    this.adicionarFalta = function() {
        return this.faltas++
    }
};

module.exports = Aluno;