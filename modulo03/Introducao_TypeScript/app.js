"use strict";
console.log("Chama e testar tudo ok html com TS!!!!");
var button = document.getElementById('somar');
var resultado = document.getElementById('result');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function handleClick(event) {
    var a = document.getElementById('a_soma').value;
    var b = document.getElementById('b_soma').value;
    var somaA_B = somarResultado(Number(a), Number(b));
    if (resultado) {
        resultado.innerText = String(somaA_B);
    }
    else {
        alert("A soma \u00E9 ".concat(somaA_B));
    }
});
function somarResultado(a, b) {
    return a + b;
}
