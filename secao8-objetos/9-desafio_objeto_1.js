// Objeto data
// Atributos: dia, mes e ano
// Metodo: ecivoso -> "dia/mes/ano"

// const nascimento = {
//     dia: 9,
//     mes: 10,
//     ano: 2010,
//     exibir: function() {
//         return `${this.dia}/${this.mes}/${this.ano}`
//     }   
// };

// nascimento.dia = 11;

// console.log(nascimento.mes);
// console.log(nascimento.exibir());

const nascimento = {
    dia: 4,
    mes: 5,
    ano: 2012,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    } 
};

console.log(nascimento.dia);
console.log(nascimento.exibir());