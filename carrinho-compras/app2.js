function capturarValores(){
    const nome = document.getElementById('campoNome').value;
    const idade = document.getElementById('campoIdade').value;

    document.getElementById('mostrarNome').textContent = `Nome ${nome}, Idade ${idade}`;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

function modificarConteudo(){
    const paragrafo = document.getElementById('meuParagrafo');
    paragrafo.textContent = 'Novo texto modifcando dinamicamente!';
}

const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
const mensagem = `A soma de ${numero1} e ${numero2} é ${soma}.`;

console.log(mensagem);

const duasSentecas = "Criar o que não existe ainda deve ser pretensão de todo sujeito que esta vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo."
const frasesSeparadas = duasSentecas.split(';');

console.log(frasesSeparadas);

const numeroSeparados = "10, 20, 30, 40, 50";
const arrayNumeros = numeroSeparados.split(',');
console.log(arrayNumeros);