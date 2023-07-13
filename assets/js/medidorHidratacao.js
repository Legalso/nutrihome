var contador = 0;
var meta = parseInt(localStorage.getItem('metaAgua')) || 2400;
var medidorImagem = document.getElementById('medidor-imagem');
var areaMeta = document.querySelector('#meta-agua')
areaMeta.innerHTML = 'Meta: ' + localStorage.getItem('metaAgua') + ' ml'

function diminuirHidratacao() {
  if (contador > 0) {
    contador -= parseInt(localStorage.getItem('metaAgua')) / 6;
    exibirContador();
    verificarMeta();
    atualizarImagem();
  }
}

function aumentarHidratacao() {
  if (contador < meta) {
    contador += parseInt(localStorage.getItem('metaAgua')) / 6;
    exibirContador();
    verificarMeta();
    atualizarImagem();
  }
}

function exibirContador() {
  document.getElementById('medidor-contador').textContent = contador + ' ml';
}

function verificarMeta() {
  if (contador >= meta) {
    document.getElementById('parabens-mensagem').style.display = 'block';
  } else {
    document.getElementById('parabens-mensagem').style.display = 'none';
  }
}

function atualizarImagem() {
  var imagemEstagio = Math.floor(contador / (meta / 4));
  medidorImagem.src = 'img/aguaestagio' + imagemEstagio + '.png';
}
