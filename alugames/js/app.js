// Contagem de quantos jogos foram alugados 
let alugados = 0;   

function jogosAlugados(){
            console.log(`Total de Jogos alugados: ${alugados}`);
}

function alterarStatus(id){
    // Relacionei as variaveis com os elementos, classes e IDs do HTML que serão modificadas.
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
   
    // Estrututa condicional para verificar se "contém" o botao esta alugado ou nao e alterar o seu status.
    if(imagem.classList.contains('dashboard__item__img--rented')){
        // Adicionando uma confirmação antes de devolver o jogo
       if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'; 
        alugados--;
        }
    } else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alugados++;
    }

    jogosAlugados();
}

    // Inicializa a contagem considerando que os os jogos já começam alugados  
    document.addEventListener('DOMContentLoaded', function() {
        alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
        jogosAlugados();
    });    

// esse tipo de função é chamado de function expression por utilizar const e não possui hoisting, ou seja, não da para chamar a função antes da estrutura dela.
const essaPalavraEumPalindromo = function(palavra){
    var tamanhoigual = palavra.toLowerCase();
    var separaAsLetrasdaPalavra = tamanhoigual.split("");
    var palavrainvertida = separaAsLetrasdaPalavra.reverse();
    palavrainvertida = palavrainvertida.join("");
    console.log(separaAsLetrasdaPalavra);
    
    if(tamanhoigual == palavrainvertida){
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}

essaPalavraEumPalindromo("Arara");


// exemplo de uso:
OrdenarNumeros(5, 1, 6); // Deve exibir "Números ordenados: 1, 5, 6"

// esse função é chamado de function declaration por utilizar hoisting. 
function OrdenarNumeros(A, B, C){

    // .sort() é um metodo onde ele organiza as strings em ordem alfabética. Ao classificar números, o comportamento padrão não os classificará corretamente.
    // A função que você passa informa como classificar os elementos. São necessários dois parâmetros (x e y) que representam quaisquer dois elementos do array.
    // A forma como os elementos serão classificados depende do valor de retorno da função:
    // se retornar um valor negativo, o valor em x será ordenado antes y.
    // se retornar 0, a ordem de ae bnão mudará.
    // se retornar um valor positivo, o valor em y será ordenado antes x.
    //Ao passar a função (a, b) => a - b, você está dizendo à .sort()função para classificar os números em ordem crescente.
    const NumerosOrdenados = [A, B, C].sort((x,y) => x - y);
    console.log(`Números ordenados: ${NumerosOrdenados.join(', ')}`);
}

