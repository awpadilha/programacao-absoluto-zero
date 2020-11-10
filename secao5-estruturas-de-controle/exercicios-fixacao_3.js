const almoco = 25;
let aviso;

if (almoco < 13) {
    aviso = 'Já tá com fome, é?';
} else if (almoco == 13) {
    aviso = 'Hora de encher a barriguinha!';
} else if (almoco > 13 && almoco <= 19) {
    aviso = 'Perdeu o almoço, agora espera a janta!';
} else if (almoco == 20) {
    aviso = 'Perdeu o almoço, mas garantiu a janta!';
} else if (almoco > 20 && almoco < 24) {
    aviso = 'Vai ter que pedir um iFood!';
} else {
    aviso = 'Dorme que passa!';
}

console.log(aviso);