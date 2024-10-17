const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

const hamburgerMenu = document.querySelector("#hamburger-menu");

const line1 = document.querySelector("#line1");
const line2 = document.querySelector("#line2");
const line3 = document.querySelector("#line3");

const line4 = document.querySelector("#line4");

function handleMenu() {
  hamburgerMenu.classList.toggle("hidden");
}

menuBtn.addEventListener("click", handleMenu);
closeMenuBtn.addEventListener("click", handleMenu);

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler(event) {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

setupIntersectionObserver(line4, true, 0.75);