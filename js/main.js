document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const itensMenu = document.querySelector('.itens');
    
    // Abrir/fechar com o botão hamburguer
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Impede que o clique propague
      menu.classList.toggle('active');
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
      // Verifica se o clique foi fora do menu
      if (!menu.contains(e.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
    
    // Impede que o clique nos itens do menu feche
    itensMenu.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });


  AOS.init({
    once: false,
    duration: 2000,
    offset: 200,
    delay: 0
  });

  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.depoimentos-swiper', {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });



document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const menuContainer = document.querySelector('.menu-container');
  
  // Controle do menu hambúrguer
  hamburgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
    menuContainer.classList.toggle('active');
  });

  // Fechar menu ao clicar fora
  document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const menuContainer = document.querySelector('.menu-container');
  
  hamburgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuContainer.classList.toggle('active');
    document.body.style.overflow = menuContainer.classList.contains('active') ? 'hidden' : '';
  });
  
  // Fechar menu ao clicar nos links
  document.querySelectorAll('.menu-center a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      menuContainer.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});
})
