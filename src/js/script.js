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
