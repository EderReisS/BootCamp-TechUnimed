console.log("Chama e testar tudo ok html com TS!!!!");

const button = document.getElementById('somar');
var resultado = document.getElementById('result');

button?.addEventListener('click', function handleClick(event) {
    let a = (document.getElementById('a_soma') as HTMLInputElement).value;
    let b = (document.getElementById('b_soma') as HTMLInputElement).value;
    let somaA_B = somarResultado(Number(a),Number(b))
    if(resultado){
        resultado.innerText = String(somaA_B);
    }
    else{
        alert(`A soma é ${somaA_B}`)
    }
    
});

function somarResultado(a:number,b:number): number{
    return a+b;
}