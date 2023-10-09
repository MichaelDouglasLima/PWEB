function comparar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (num1 > num2){
        if (num1 > num3){
            alert("O maior número é: " + num1);
        }
        else{
            alert("O maior número é: " + num3);
        }
    }
    else if (num2 > num3){
        alert("O maior número é: " + num2);
    }
    else{
        alert("O maior número é: " + num3);
    }
}
