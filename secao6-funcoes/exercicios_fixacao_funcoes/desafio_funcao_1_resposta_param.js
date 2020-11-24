// função: 2 params -> console.log(+)
// função: 2 params -> console.log(-)

// ...(3, 4)
// ...(31, 98)

// ...(11, 7)
// ...(19,52)

function somar(n1 , n2) {
    return n1 + n2;
}

function subtrair(a, b) {
    return a - b;
}

const somada = somar;
const subtrada = subtrair;

somar(3, 4);
somar(31, 98);

subtrair(11, 7);
subtrair(19, 52);

console.log(somar(5, 2));
console.log(somada(5, 2));
console.log(subtrair(5, 2));
console.log(subtrada(5, 2));