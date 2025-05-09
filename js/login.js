document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('active');
    
    // Alternar atributo ARIA para acessibilidade
    const isExpanded = menu.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target)) {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll('.itens a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Inicializações adicionais (AOS, Swiper, etc)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: false,
      duration: 2000,
      offset: 200,
      delay: 0
    });
  }

  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.depoimentos-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3
        }
      }
    });
  }
});

  // ====================
  // Validação do formulário
  // ====================
  const form = document.getElementById('formulario');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');

  const erroEmailDiv = document.getElementById('erro-email');
  const erroSenhaDiv = document.getElementById('erro-senha');

  const erroEmailMsg = erroEmailDiv.querySelector('span');
  const erroSenhaMsg = erroSenhaDiv.querySelector('span');

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
    spanErro.textContent = mensagem;
    divErro.style.display = 'flex';
  }

  function ocultarErro(input, divErro) {
    input.classList.remove('erro');
    divErro.style.display = 'none';
  }


  
