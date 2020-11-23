// Parâmetro (Nota) -> Retorno (Conceito)

function notaParaConceito(nota) {
    let conceito;
    switch(Math.ceil(nota)) {
        case 10: conceito = 'A+'; break;
        case 9: conceito ='A'; break;
        case 8: conceito ='B+'; break;
        case 7: cconceito ='B'; break;
        case 6: conceito ='C+'; break;
        case 5: conceito ='C'; break;
        case 4: cconceito ='D+'; break;
        case 3: conceito ='D'; break;
        case 2: conceito ='E+'; break;
        case 1: conceito ='E'; break;
        case 0: conceito ='F'; break;
        default: conceito = ('Conceito inválido!'); break;
    }
    return conceito(A);
}


let nota = 6;
console.log(`${conceito}`)