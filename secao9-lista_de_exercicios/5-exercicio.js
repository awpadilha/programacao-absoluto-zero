// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual(5, 1) // retornará false


// Tentativa

// function maiorOuIgual(a, b) {
//     if a >= b {
//         console.log(true)
//     }else if {
//         console.log(false)
//     }
// }

function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false;

    return primeiro >= segundo;
}

console.log(maiorOuIgual(20, 30));