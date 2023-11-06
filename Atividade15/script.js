
function enviar() {
    var nomeUsuario = document.formulario.nameUser.value;
    var comentarioUsuario = document.formulario.comentUser.value;

    if (nomeUsuario.length < 10) {
        alert("O nome precisa ter mais que 10 caracteres!");
    } else if (comentarioUsuario.length < 20) {
        alert("O comentário precisa ter mais que 20 caracteres!")
    } else {
        if (document.querySelector('input[name="opcao"]:checked').value == "Sim") {
            alert("Volte sempre a esta página!");
        } else {
            alert("Que bom que você voltou a visitar esta página!")
        }
    }
}