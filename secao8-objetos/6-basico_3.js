const data = {
    dia: 1,
    mes: 10,
    ano: 2021,
};

data.dia = 24;
data.mes = 12;

//data = {}; Não é atribuido um outro objeto diferente

console.log(`${data.dia}/${data.mes}/${data.ano}`);