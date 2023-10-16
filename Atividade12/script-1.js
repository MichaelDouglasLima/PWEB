//Exercício 1

function Retangulo(x, y) {
    this.x = x;
    this.y = y;

    this.CalcArea = function () {
        return this.x * this.y;
    }
}

var base = prompt("Digite a base do Retângulo: ");
var altura = prompt("Digite a altura do Retângulo: ");

objRetabgulo = new Retangulo(base, altura);

alert("A área do retângulo é: " + objRetabgulo.CalcArea());
