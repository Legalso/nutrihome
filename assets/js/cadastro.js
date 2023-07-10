// JavaScript para seleção de elementos dentro de "selecionarsexo" e "roleselection"

// Seleciona todos os elementos com a classe "sexo"
const sexos = document.querySelectorAll('#selecionarsexo .sexo');

// Adiciona um event listener a cada elemento
sexos.forEach(sexo => {
  sexo.addEventListener('click', () => {
    // Remove a classe "selected" de todos os elementos
    sexos.forEach(sexo => sexo.classList.remove('selected'));
    // Adiciona a classe "selected" ao elemento clicado
    sexo.classList.add('selected');
  });
});

// Seleciona todas as divs dentro de "roleselection"
const roles = document.querySelectorAll('#roleselection div');

// Adiciona um event listener a cada div
roles.forEach(role => {
  role.addEventListener('click', () => {
    // Remove a classe "selected" de todas as divs
    roles.forEach(role => role.classList.remove('selected'));
    // Adiciona a classe "selected" à div clicada
    role.classList.add('selected');
  });
});
