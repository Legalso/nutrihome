function calcularIMC() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  altura = altura / 100;
  var imc = peso / (altura * altura);
  var resultadoElement = document.getElementById('resultado');
  var mensagemElement = document.getElementById('mensagem');

  if (peso === '0' || altura === '0' || peso === 0 || altura === 0) {
    resultadoElement.textContent = '';
    mensagemElement.textContent = 'Por favor, insira um valor válido para peso e altura.';
    return;
  }

  if (peso === '' || altura === '') {
    resultadoElement.textContent = '';
    mensagemElement.textContent = 'Por favor, preencha o peso e a altura.';
    return;
  }

  resultadoElement.textContent = 'Seu IMC é: ' + imc.toFixed(2);

  if (imc < 18.5) {
    resultadoElement.classList.add('amarelo');
    mensagemElement.textContent = 'IMC abaixo do peso (não saudável)';
    exibirDietaRecomendada('pagina_indicacao_dieta_abaixo.html');
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoElement.classList.add('verde');
    mensagemElement.textContent = 'IMC saudável';
    exibirDietaRecomendada('pagina_indicacao_dieta_saudavel.html');
  } else {
    resultadoElement.classList.add('vermelho');
    mensagemElement.textContent = 'IMC acima do peso (não saudável)';
    exibirDietaRecomendada('pagina_indicacao_dieta_acima.html');
  }
}

function exibirDietaRecomendada(url) {
  var botaoRedirecionar = document.getElementById('botao-redirecionar');
  botaoRedirecionar.setAttribute('href', url);
  botaoRedirecionar.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  var calcularButton = document.getElementById('calcular-button');
  calcularButton.addEventListener('click', calcularIMC);
});
