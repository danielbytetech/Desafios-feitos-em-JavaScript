let TotalGeral = 0;
limpar();

function adicionar(){
    // recuperar valores, quantidade, nome do produto e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUntario = parseInt(produto.split('R$')[1]);

    // verificar se o produto é valido 
    if(!produto || produto.trim() === ""){
        alert("Selecione um produto válido.");
        return;
    }

    // verificar se a quantidade inserida é válida
    if(isNaN(quantidade) || quantidade <= 0){
        alert("Insira uma quantidade válida.");
        return;
    }


    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUntario;
    
    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUntario}</span>
  </section>`;

    //atualizar o valor total
    TotalGeral = TotalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent =  `R$ ${TotalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    TotalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}