function calcularIMC() {
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;
  altura = altura / 100;
  var imc = peso / (altura * altura);
  var resultadoElement = document.getElementById('resultado');
  var mensagemElement = document.getElementById('mensagem');
  var imagemElement = document.getElementById('imagem-troca');

  if (peso === '0' || altura === '0' || peso === 0 || altura === 0) {
    resultadoElement.textContent = '';
    mensagemElement.textContent = 'Por favor, insira um valor válido para peso e altura.';
    imagemElement.setAttribute('src', 'img/imc1.png');
    return;
  }

  if (peso === '' || altura === '') {
    resultadoElement.textContent = '';
    mensagemElement.textContent = 'Por favor, preencha o peso e a altura.';
    imagemElement.setAttribute('src', 'img/imc1.png');
    return;
  }

  resultadoElement.textContent = 'Seu IMC é: ' + imc.toFixed(2);

  if (imc < 18.5) {
    resultadoElement.classList.remove('verde', 'vermelho');
    resultadoElement.classList.add('amarelo');
    mensagemElement.textContent = 'IMC abaixo do peso (não saudável)';
    imagemElement.setAttribute('src', 'img/imc 1.png');
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoElement.classList.remove('amarelo', 'vermelho');
    resultadoElement.classList.add('verde');
    mensagemElement.textContent = 'IMC saudável';
    imagemElement.setAttribute('src', 'img/imc 2.png');
  } else if (imc >= 25 && imc <= 29.9) {
    resultadoElement.classList.remove('amarelo', 'verde');
    resultadoElement.classList.add('vermelho');
    mensagemElement.textContent = 'IMC acima do peso (não saudável)';
    imagemElement.setAttribute('src', 'img/imc 3.png');
  } else if (imc >= 30 && imc <= 34.9) {
    resultadoElement.classList.remove('verde', 'vermelho');
    resultadoElement.classList.add('amarelo');
    mensagemElement.textContent = 'Obesidade grau 1';
    imagemElement.setAttribute('src', 'img/imc 4.png');
  } else if (imc >= 35 && imc <= 39.9) {
    resultadoElement.classList.remove('verde', 'vermelho');
    resultadoElement.classList.add('amarelo');
    mensagemElement.textContent = 'Obesidade grau 2';
    imagemElement.setAttribute('src', 'img/imc 5.png');
  } else {
    resultadoElement.classList.remove('verde', 'amarelo');
    resultadoElement.classList.add('vermelho');
    mensagemElement.textContent = 'Obesidade grau 3';
    imagemElement.setAttribute('src', 'img/imc 6.png');
  }

  localStorage.setItem('imc', imc.toFixed(2)); // Armazena o valor do IMC no armazenamento local
  localStorage.setItem('peso', peso);

  var botaoRedirecionarDieta = document.getElementById('botao-redirecionar-dieta');
  botaoRedirecionarDieta.style.display = 'inline'; // Exibe o botão "Dieta Recomendada"
}

function calcularMetaAgua() {
  var peso = document.getElementById('peso').value;
  var metaAgua = Math.round(peso * 35); // Cálculo da meta de água com base no peso (35 ml por kg)

  localStorage.setItem('metaAgua', metaAgua); // Armazena a meta de água no armazenamento local
}

document.addEventListener('DOMContentLoaded', function() {
  var calcularButton = document.querySelector('button');
  calcularButton.addEventListener('click', function() {
    calcularIMC();
    calcularMetaAgua();
  });

  var imcNumeroElement = document.getElementById('imc-numero');
  var imcValue = localStorage.getItem('imc');

  if (imcValue) {
    imcNumeroElement.textContent = 'Seu último IMC foi: ' + imcValue;
  } else {
    imcNumeroElement.textContent = 'Ainda não há IMC registrado';
  }

  var metaAguaElement = document.getElementById('meta-agua');
  var metaAguaValue = localStorage.getItem('metaAgua');

  if (metaAguaValue) {
    metaAguaElement.textContent = 'Meta de Hidratação: ' + metaAguaValue + ' ml';
  } else {
    metaAguaElement.textContent = 'Ainda não há meta de hidratação registrada';
  }
});

document.getElementById('botao-redirecionar-dieta').addEventListener('click', function() {
  var imc = parseFloat(document.getElementById('imc-numero').textContent);
  if (imc >= 18.5 && imc <= 24.9) {
    window.location.href = 'pagina_indicacao_dieta_saudavel.html';
  } else if (imc < 18.5) {
    window.location.href = 'pagina_indicacao_dieta_abaixo.html';
  } else if (imc > 24.9) {
    window.location.href = 'pagina_indicacao_dieta_acima.html';
  }
});
