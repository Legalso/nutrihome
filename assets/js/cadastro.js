let selectedRole = null;

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
