const almoco = 20;
let aviso;

if (almoco < 13) {
    aviso = 'Já tá com fome, é?';
} else if (almoco == 13) {
    aviso = 'Hora de encher a barriguinha!';
} else if (almoco > 13) {
    aviso = 'Perdeu o almoço playboy!';
} else if(almoco == 19) {
    aviso = 'Perdeu o almoço, mas garantiu a janta!';
} else {
    aviso = 'Vai ter que pedir um iFood!';
}

console.log(aviso);