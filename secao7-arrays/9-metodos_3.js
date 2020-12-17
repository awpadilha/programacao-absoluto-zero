const numeros = [10, 20, 30];

function praCadaElemento(elemento, indice, array) { //primeiro sempre sera elemento, o segundo o indice e o terceiro o array compelto, nao importa o nome usado
    console.log(elemento, indice, array);
} 

numeros.forEach(praCadaElemento)

numeros.forEach(function(el) {
    console.log(el)
}); 


numeros.forEach(function(_, i) {
    console.log(i)
}); 



// numeros.forEach(function(){
//     console.log('Dentro do forEach!')
// }); 

// for(n of numeros) { // percorre os valores
//     console.log(n)
// }

// for  (l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    et i = 0; i < numeros.length; i++) { //percorre todos os números 
//     console.log(numeros[i]);
// }