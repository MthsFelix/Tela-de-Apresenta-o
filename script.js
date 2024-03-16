// botão modo escuro
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.alternarmodoescuro');
    const body = document.querySelector('body');
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        toggleButton.textContent = body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
    });
});
//botoes de configuração
function changeText() {
    var newText = prompt("Digite o novo texto:");
    if (newText) {
      document.getElementById("nomeusuario").innerHTML = newText;
    }
  }
  
  function verifyEmail() {
    alert("Verifique seu email para prosseguir");
}