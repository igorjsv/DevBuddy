document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
  
    const erroEmailDiv = document.getElementById('erro-email');
    const erroSenhaDiv = document.getElementById('erro-senha');
  
    const erroEmailMsg = erroEmailDiv.querySelector('span');
    const erroSenhaMsg = erroSenhaDiv.querySelector('span');
  
    // Validação ao enviar o formulário
    form.addEventListener('submit', function (e) {
      let valido = true;
  
      if (!validarEmail(email.value)) {
        mostrarErro(email, erroEmailDiv, erroEmailMsg, 'Digite um email válido (ex: nome@email.com)');
        valido = false;
      }
  
      if (!validarSenha(senha.value)) {
        mostrarErro(senha, erroSenhaDiv, erroSenhaMsg, 'A senha deve ter no mínimo 6 caracteres');
        valido = false;
      }
  
      if (!valido) e.preventDefault();
    });
  
    // Validação em tempo real
    email.addEventListener('input', () => {
      if (validarEmail(email.value)) {
        ocultarErro(email, erroEmailDiv);
      } else {
        mostrarErro(email, erroEmailDiv, erroEmailMsg, 'Digite um email válido (ex: nome@email.com)');
      }
    });
  
    senha.addEventListener('input', () => {
      if (validarSenha(senha.value)) {
        ocultarErro(senha, erroSenhaDiv);
      } else {
        mostrarErro(senha, erroSenhaDiv, erroSenhaMsg, 'A senha deve ter no mínimo 6 caracteres');
      }
    });
  
    function validarEmail(valor) {
      return /\S+@\S+\.\S+/.test(valor);
    }
  
    function validarSenha(valor) {
      return valor.length >= 6;
    }
  
    function mostrarErro(input, divErro, spanErro, mensagem) {
        input.classList.add('erro');
        spanErro.textContent = mensagem; // Removido o ícone daqui
        divErro.style.display = 'flex';
      }
      
    function ocultarErro(input, divErro) {
      input.classList.remove('erro');
      divErro.style.display = 'none';
    }
  });
  