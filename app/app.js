let iconHamburger = document.querySelector(".nav__imagen-hamburger");
let iconClose = document.querySelector(".nav__imagen-close");

const nav =  () => {
    document.body.classList.toggle("nav__active");
}

iconHamburger.addEventListener("click", nav);
iconClose.addEventListener("click", nav);