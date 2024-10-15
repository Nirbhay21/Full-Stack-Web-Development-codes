const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

const hamburgerMenu = document.querySelector("#hamburger-menu");

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

function handleMenu() {
  hamburgerMenu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", handleMenu);
closeMenuBtn.addEventListener("click", handleMenu);

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entires) => {};
  const intersectionObserver = new IntersectionObserver();
  intersectionObserver.observe(element);
}

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
