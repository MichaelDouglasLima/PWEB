function organizar() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;

    if (num1 > num2) {
        if (num1 > num3) {
            if (num2 > num3) {
                alert(`Organizados: ${num3}, ${num2}, ${num1}`);
            }
            else {
                alert(`Organizados: ${num2}, ${num3}, ${num1}`);
            }
        }
        else {
            alert(`Organizados: ${num2}, ${num1}, ${num3}`);
        }
    }
    else if (num2 > num3) {
        if (num1 > num3) {
            alert(`Organizados: ${num3}, ${num1}, ${num2}`);
        }
        else {
            alert(`Organizados: ${num1}, ${num3}, ${num2}`);
        }
    }
    else {
        alert(`Organizados: ${num1}, ${num2}, ${num3}`);
    }
}