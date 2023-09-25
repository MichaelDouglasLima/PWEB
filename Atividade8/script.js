function jogar(){
    var opcoes = ["Pedra", "Papel", "Tesoura"];
    var radioLista = document.getElementsByName("opcao");  
    var opJogador = null;
    var opMaquina = Math.random();

    if (opMaquina <= 0.33){
        opMaquina = opcoes[0];
    }
    else if( opMaquina <= 0.66){
        opMaquina = opcoes[1];
    }
    else{
        opMaquina = opcoes[2];
    }
    
    for (var i = 0; i < 3; i++){
        if (radioLista[i].checked){
            opJogador = opcoes[i];
        }
    }
    
    if (opJogador == opMaquina){
        alert("Empatou!");
    }
    else if (opJogador === "Pedra" && opMaquina === "Papel"){
        alert("Máquina Venceu!");
    }
    else if (opJogador === "Pedra" && opMaquina === "Tesoura"){
        alert("Você Venceu!");
    }
    else if (opJogador === "Tesoura" && opMaquina === "Pedra"){
        alert("Máquina Venceu!");
    }
    else if (opJogador === "Tesoura" && opMaquina === "Papel"){
        alert("Você Venceu!");
    }
    else if (opJogador === "Papel" && opMaquina === "Pedra"){
        alert("Você Venceu!");
    }
    else{
        alert("Máquina Venceu!");
    }
}