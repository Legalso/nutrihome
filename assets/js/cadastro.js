let selectedRole = null;

const man = document.querySelector('#man')
const woman = document.querySelector('#woman')

function selectRole(role) {
  const pacienteContainer = document.getElementById('paciente-container');
  const nutriContainer = document.getElementById('nutri-container');
  const textNutri = document.getElementById('textNutri')
  const textPaciente = document.getElementById('textPaciente')

  if (role === 'paciente') {
    if (selectedRole === 'paciente') {
      // Deselecionar paciente
      selectedRole = null;
      pacienteContainer.classList.remove('selected');
      textPaciente.classList.remove('underline')
    } else {
      // Selecionar paciente
      selectedRole = 'paciente';
      pacienteContainer.classList.add('selected');
      textPaciente.classList.add('underline')
      nutriContainer.classList.remove('selected');
      textNutri.classList.remove('underline')
    }
  } else if (role === 'nutri') {
    if (selectedRole === 'nutri') {
      // Deselecionar nutri
      selectedRole = null;
      nutriContainer.classList.remove('selected');
      textNutri.classList.remove('underline')
    } else {
      // Selecionar nutri
      selectedRole = 'nutri';
      nutriContainer.classList.add('selected');
      textNutri.classList.add('underline')
      pacienteContainer.classList.remove('selected');
      textPaciente.classList.remove('underline')
    }
  }
}

man.addEventListener('click', ()=>{
  man.classList.add('sexoMF-border')
  woman.classList.remove('sexoMF-border')
})

woman.addEventListener('click', ()=>{
  man.classList.remove('sexoMF-border')
  woman.classList.add('sexoMF-border')
})