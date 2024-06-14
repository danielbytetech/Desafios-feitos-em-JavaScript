function comprar(){
    // Amarzenar o tipo de ingresso, a quantidade escolhida, verificar por etapas usando o alert
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade é um número positivo 
    // isNaN significa não ter nada no campo 
    if(isNaN(quantidade) || quantidade <= 0){
        alert('Por Favor, insira uma quantidade valida');
        return;
    }

    if(tipo == 'pista'){
        comprarPista(quantidade);
    } else if(tipo == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

    // Calcular a quantidade disponivel e criar funções para cada tipo disponivel 
    function comprarPista(qtd){
        let TotalPista = parseInt(document.getElementById('qtd-pista').textContent);

        if(quantidade > TotalPista){
            alert('Quantidade Indisponivel para tipo pista');
        } else{
            TotalPista = TotalPista - qtd;
            document.getElementById('qtd-pista').textContent = TotalPista;
            alert('Compra realizada com sucesso!!');
        }
    }

    function comprarSuperior(qtd){
        let TotalSuperior = parseInt(document.getElementById('qtd-superior').textContent);

        if(quantidade > TotalSuperior){
            alert('Quantidade Indisponivel para tipo superior');
        } else{
            TotalSuperior = TotalSuperior - qtd;
            document.getElementById('qtd-superior').textContent = TotalSuperior;
            alert('Compra realizada com sucesso!!');
        }
    }
    
    function comprarInferior(qtd){
        let TotalInferior = parseInt(document.getElementById('qtd-inferior').textContent);

        if(quantidade > TotalInferior){
            alert('Quantidade Indisponivel para tipo inferior');
        } else{
            TotalInferior = TotalInferior - qtd;
            document.getElementById('qtd-inferior').textContent = TotalInferior;
            alert('Compra realizada com sucesso!!');
        }
    }
}

// conversão de string para inteiro
let ValorString = '42';
let valorInteiro = letraParaNumero(ValorString);
console.log(valorInteiro);

function letraParaNumero(ValorString){
    return parseInt(ValorString);
}


// Programa de uma calculadora Simples
function adicao(A, B){
    return A + B;
}

function subtrair(A, B){
    return A - B;
}

function multiplicar(A, B){
    return A * B;
}

function Dividir(A, B){
    if(B !== 0){
    return A / B;
} else {
    return 'Erro: divisão por zero.';
}
}

function calculadora(operacao, A, B){
    switch(operacao){
        case 'soma':
            return adicao(A,B);
        case 'subtracao':
            return subtrair(A,B);
        case 'multiplicacao':
            return multiplicar(A,B);
        case 'divisao':
            return Dividir(A,B);
        default:
            return 'Operação invalida'
    }
}

// Exemplo de uso
let resultado = calculadora('soma', 5, 6);
console.log(resultado);

function verificarParOuImpar(numero){
    if(numero % 2 === 0){
        return 'Par';
    } else {
        return 'Impar';
    }
}

let num = 6;
let resultadoParouImpar = verificarParOuImpar(num);
console.log(resultadoParouImpar);

// Conversão de Temperatura 

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77
