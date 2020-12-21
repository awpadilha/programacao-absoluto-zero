const produto = { // 3 atributos ou propriedades
    nome: 'Ipad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() { // METODO = funcao dentro do contexto do objeto
        return preco * (1 - desconto);
    }
}

console.log(produto.nome);
console.log(produto.precoComDesconto());

