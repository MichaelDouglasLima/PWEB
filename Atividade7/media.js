var nome = prompt("Digite o seu nome: ");
var nota1 = prompt("Digite a nota da prova 1: ");
var nota2 = prompt("Digite a nota da prova 2: ");
var nota3 = prompt("Digite a nota da prova 3: ");

var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

alert(`${nome} A sua média é: ${media}`);

// alert(nome + " A sua méda é: " + media);

