function executar(fn, n1 = 10, n2 = 10, n3 = 10) {
    if(typeof fn === "function") {
        console.log(fn(n1, n2, n3)); 
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

executar(somar, 90, 50, 50, 45); // <-- não reconhece o item excedente (apenas 3 itens)
executar(subtrair, 90, 50);
executar(multiplicar, 90, 50);
executar(multiplicar, 900, 500);
executar(dividir,50, 50, 50);
executar(dividir) // <-- dividiu levando em consideração os itens pré-definidos