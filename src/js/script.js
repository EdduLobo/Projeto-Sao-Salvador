// navegation menu toggle functionality
function toggleMenu() {
  const icon = document.getElementById("icon");
  const menu = document.getElementById("menu");

  icon.classList.toggle("open");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.add("opacity-100", "translate-y-0");
    }, 10);
  } else {
    menu.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }
}
// accordion
  function setActive(index) {
    const panels = document.querySelectorAll('#accordion .panel');
    panels.forEach((panel, i) => {
      if (i === index) {
        panel.classList.add('flex-1', 'active');
        panel.classList.remove('w-[4%]');
      } else {
        panel.classList.remove('flex-1', 'active');
        panel.classList.add('w-[4%]');
      }
    });
  }

  // Inicializa com o primeiro ativo
  setActive(0);

// Galeria

  const miniaturas = document.querySelectorAll('.miniatura');
  const imagemPrincipal = document.querySelector('.imagem-principal');
  const legenda = document.querySelector('.legenda');

  miniaturas.forEach((miniatura) => {
    miniatura.addEventListener('click', () => {
      const novaSrc = miniatura.getAttribute('data-img');
      imagemPrincipal.src = novaSrc;

      const nomeArquivo = novaSrc.split('/').pop();
      legenda.textContent = nomeArquivo;

      miniaturas.forEach(btn => btn.classList.remove('border-[3px]', 'border-yellow-400'));
      miniatura.classList.add('border-[3px]', 'border-yellow-400');
    });
  });



