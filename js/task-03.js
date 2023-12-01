const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameOutput.textContent = 'Anonymous';

nameInput.addEventListener('input', updateName);

function updateName() {
  const trimmedName = nameInput.value.trim();
  nameOutput.textContent = trimmedName || 'Anonymous';
}