function calcularIMC() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  altura = altura / 100;
  var imc = peso / (altura * altura);
  var resultadoElement = document.getElementById('resultado');
  var mensagemElement = document.getElementById('mensagem');

  resultadoElement.textContent = 'Seu IMC é: ' + imc.toFixed(2);

  if (imc < 18.5) {
    resultadoElement.classList.add('amarelo');
    mensagemElement.textContent = 'IMC abaixo do peso (não saudável)';
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoElement.classList.add('verde');
    mensagemElement.textContent = 'IMC saudável';
  } else {
    resultadoElement.classList.add('vermelho');
    mensagemElement.textContent = 'IMC acima do peso (não saudável)';
  }

  var botaoRedirecionar = document.getElementById('botao-redirecionar');
  botaoRedirecionar.style.display = 'block';
}

function exibirResultadoIMC() {
  var botaoRedirecionar = document.getElementById('botao-redirecionar');
  botaoRedirecionar.addEventListener('click', redirecionarDieta);
  botaoRedirecionar.style.display = 'block';
}

function redirecionarDieta() {
  var imc = parseFloat(document.getElementById('resultado').textContent.split(':')[1]);

  if (imc < 18.5) {
    window.location.href = 'pagina_indicacao_dieta_abaixo.html'; // Redireciona para a página de indicação de dieta abaixo do peso
  } else if (imc >= 18.5 && imc <= 24.9) {
    window.location.href = 'pagina_indicacao_dieta_saudavel.html'; // Redireciona para a página de indicação de dieta saudável
  } else {
    window.location.href = 'pagina_indicacao_dieta_acima.html'; // Redireciona para a página de indicação de dieta acima do peso
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var calcularButton = document.getElementById('calcular-button');
  calcularButton.addEventListener('click', function() {
    calcularIMC();
    exibirResultadoIMC();
  });
});
