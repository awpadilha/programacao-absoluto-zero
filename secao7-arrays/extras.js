const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for(let i = numeros.length -1 ; i >= 0; i -= 1) {
    console.log(numeros[i]);
}

function isOdd(value) {
    if(value % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isOdd(2))