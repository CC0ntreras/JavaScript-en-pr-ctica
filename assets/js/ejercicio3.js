//suma
function sumar(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let suma = valor1 + valor2;
    document.querySelector(".resultado").innerHTML  = suma;
    console.log(suma);
}

//resta

function restar(){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resta = valor1 - valor2;
    if (resta < 0) {
        resta = 0;
    }
    else {resta = resta;}
    document.querySelector(".resultado").innerHTML  = resta;
    console.log(resta);
}