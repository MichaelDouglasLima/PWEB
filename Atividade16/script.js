function confirmarCurso() {
    if (document.getElementById("cursos").value != '') {
        var confirmacao = confirm('Este é o curso desejado?');

        if (confirmacao) {
            escolherCurso();
        }
    }
}

function escolherCurso() {

    var curso = document.getElementById("cursos").value;

    switch (curso) {
        case 'ads':
            window.open('ads.html');
            break;

        case 'ea':
            window.open('ea.html');
            break;

        case 'fm':
            window.open('fm.html');
            break;
        case 'gq':
            window.open('gq.html');
            break;

        case 'ge':
            window.open('ge.html');
            break;

        case 'lg':
            window.open('lg.html');
            break;

        case 'ma':
            window.open('ma.html');
            break;

        case 'pl':
            window.open('pl.html');
            break;

        case 'pcm':
            window.open('pcm.html');
            break;
        case 'prm':
            window.open('prm.html');
            break;

        case 'sb':
            window.open('sb.html');
            break;

        default:
            alert('Opção inválida!');
    }
}