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
 let state = 0;

  function setActive(next) {
    const p0 = document.getElementById("panel-0");
    const p1 = document.getElementById("panel-1");
    const p2 = document.getElementById("panel-2");

    // Reset
    p0.classList.remove("w-1/3", "w-1/4");
    p1.classList.remove("flex-1", "w-1/4");
    p2.classList.remove("translate-x-0");

    // Estado 1: infantil + iniciante
    if (next === 1) {
      p0.classList.replace("flex-1", "w-1/3");
      p1.classList.replace("w-0", "flex-1");
    }

    // Estado 2: avança pro avançado
    else if (next === 2) {
      p0.classList.replace("w-1/3", "w-1/4");
      p1.classList.replace("flex-1", "w-1/4");
      p2.classList.remove("translate-x-full");
      p2.classList.add("translate-x-0");
    }

    // Estado 0: volta pro infantil
    else if (next === 0) {
      p0.classList.replace("w-1/4", "flex-1");
      p1.classList.replace("w-1/4", "w-0");
      p2.classList.remove("translate-x-0");
      p2.classList.add("translate-x-full");
    }

    state = next;
  }

// Galeria

  const miniaturas = document.querySelectorAll('.miniatura');
  const imagemPrincipal = document.getElementById('imagem-principal');

  miniaturas.forEach((btn) => {
    btn.addEventListener('click', () => {
      imagemPrincipal.src = btn.querySelector('img').src;

      miniaturas.forEach(m => m.classList.remove('border-yellow-400', 'shadow-md'));
      btn.classList.add('border-yellow-400', 'shadow-md');
    });
  });

