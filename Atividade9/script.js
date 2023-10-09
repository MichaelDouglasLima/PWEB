var idade;
var sexo;
var opiniao; // 1 = Péssimo, 2 = Regular, 3 = Bom, 4 = Ótimo

var mediaIdade = 0;
var velhoIdade = 0;
var novoIdade = 0;
var qtdePessimo = 0;
var qtdeOtimoBom = 0;
var qtdeHomens = 0;
var qtdeMulheres = 0;
var primeiroTeste = 0;

for (var i = 0; i < 5; i++){
    idade = prompt("Informe a sua idade: ");
    sexo = prompt("Informe o seu sexo (M/F):" );
    opiniao = prompt("Informe sua opinião (1 = Péssimo, 2 = Regular, 3 = Bom, 4 = Ótimo): ");

    mediaIdade += Number(idade);

    // Verificando o Gênero
    if (sexo == 'M'){
        qtdeHomens += 1;
    }
    else if (sexo == 'F'){
        qtdeMulheres += 1;
    }

    // Verificando a Opinião
    if (opiniao == '4' || opiniao == '3'){
        qtdeOtimoBom += 1;
    }
    else if (opiniao == '1'){
        qtdePessimo += 1;
    }

    // Verificando a Idade do Mais Velho e do Mais Novo
    if (primeiroTeste == 0){
        velhoIdade = Number(idade);
        novoIdade = Number(idade);
        primeiroTeste = 1;
    }
    else {
        if (velhoIdade < Number(idade)){
            velhoIdade = Number(idade);
        }

        if (novoIdade > Number(idade)){
            novoIdade = Number(idade);
        }
    }
}

alert(`Média da idade das Pessoas que Responderam o Questionário: ${mediaIdade / 5}\n
Idade da Pessoa Mais Velha: ${velhoIdade}\n
Idade da Pessoa Mais Nova: ${novoIdade}\n
Quantidade de Pessoas que resonderam Péssimo: ${qtdePessimo}\n
Porcentagem de Pessoas que Responderam Ótimo ou Bom: ${qtdeOtimoBom / 5 * 100}%\n
Quantidade de Homens que Responderam o Questionário: ${qtdeHomens}\n
Quantidade de Mulheres que Responderam o Questionário: ${qtdeMulheres}`);