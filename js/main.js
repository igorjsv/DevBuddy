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

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('active');
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