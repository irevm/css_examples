const btnMenu = document.getElementById("btn-menu");
const navMenu = document.querySelector("#nav-menu");
const btnClose = document.querySelector("#btn-close");

// const btnMenu 
// const btnClose

btnMenu.addEventListener("click", () => {
  navMenu.classList.add("nav-visible");
});

btnClose.addEventListener("click", () => {
  navMenu.classList.remove("nav-visible");
});