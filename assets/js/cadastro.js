let selectedRole = null;

function selectRole(role) {
  const pacienteContainer = document.getElementById('paciente-container');
  const nutriContainer = document.getElementById('nutri-container');

  if (role === 'paciente') {
    if (selectedRole === 'paciente') {
      // Deselecionar paciente
      selectedRole = null;
      pacienteContainer.classList.remove('selected');
    } else {
      // Selecionar paciente
      selectedRole = 'paciente';
      pacienteContainer.classList.add('selected');
      nutriContainer.classList.remove('selected');
    }
  } else if (role === 'nutri') {
    if (selectedRole === 'nutri') {
      // Deselecionar nutri
      selectedRole = null;
      nutriContainer.classList.remove('selected');
    } else {
      // Selecionar nutri
      selectedRole = 'nutri';
      nutriContainer.classList.add('selected');
      pacienteContainer.classList.remove('selected');
    }
  }
}
