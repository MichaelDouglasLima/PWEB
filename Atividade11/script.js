//1ª Forma usando: new Object()
var aluno1 = new Object();

aluno1.ra = "00001234";
aluno1.nome = "Simão Pedro";

alert("RA: " + aluno1.ra + " Nome: " + aluno1.nome)

//2ª Forma usando: {}
var aluno2 = {};

aluno2.ra = "1234";
aluno2["nome"] = "Kelly";

alert("RA: " + aluno2.ra + " Nome: " + aluno2.nome);

//3ª Forma usando: { ... : ... }
var aluno3 = {
    ra: "1234567",
    nome: "Henrique"
};

alert("RA: " + aluno3.ra + " Nome: " + aluno3.nome);

//Função Construtora
function Aluno(ra, nome){
    this.ra = ra;
    this.nome = nome;

    this.MostraDados = function () {
        return "RA: " + this.ra + " Nome: " + this.nome;
    }
}

//4ª Forma
var aluno4 = new Aluno(333, "Igor");

alert("RA: " + aluno4.ra + " Nome: " + aluno4.nome);

//5ª Forma usando o construtor
var aluno5 = {};
var nome_propriedade = "ra";
aluno5[nome_propriedade] = "123";
aluno5['nome'] = "Vitor";
alert(aluno5.ra + " " + aluno5.nome);