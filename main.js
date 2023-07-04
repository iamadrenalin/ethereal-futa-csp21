const menuBtn = document.querySelector(".menu-btn");
const linksEl = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", ()=> {
    linksEl.classList.toggle("active");
    navBar.classList.add("active");
});