document.addEventListener("DOMContentLoaded", function () {
    renderPosts(); // se você estiver usando isso
  
    // Evento nos botões de categoria
    document.querySelectorAll(".menu-item").forEach(item => {
      item.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        if (!category) return;
        window.location.href = `/pages/categories/${category}.html`;
      });
    });
  
    // Menu hamburguer
    const hamburguer = document.querySelector('.hamburguer');
    const menuMobile = document.getElementById('menuMobile');
    const closeMenu = document.getElementById('closeMenu');
  
    if (hamburguer && menuMobile) {
      hamburguer.addEventListener('click', function () {
        menuMobile.classList.toggle('active');
      });
    }
  
    // Fechar menu com o X
    if (closeMenu && menuMobile) {
      closeMenu.addEventListener('click', function () {
        menuMobile.classList.remove('active');
      });
    }
  });
  