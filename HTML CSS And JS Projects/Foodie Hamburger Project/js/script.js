const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector("nav .close-icon");
const headerContent = document.querySelector(".header-content");

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    headerContent.classList.add("menu-open");
});

closeIcon.addEventListener("click", () => {
    headerContent.classList.remove("menu-open");
})

document.querySelector(".go-to-top").addEventListener("click", () => {
    document.querySelector(".all-content").scrollTo(0, 0);
});

window.addEventListener("click", () => {
    headerContent.classList.remove("menu-open");
});

document.querySelector(".header-content nav").addEventListener("click", (event) => {
    event.stopPropagation();
});