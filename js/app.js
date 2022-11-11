const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
const links = document.querySelectorAll("nav .nav-links li a");

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((link) => (link.style.animation = ""));
    });
});

const navbarClick = (event) => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${
                index / 7 + 0.2
            }s`;
        }
    });
    burger.classList.toggle("toggle");
};

burger.addEventListener("click", navbarClick);

const windowResize = (event) => {
    const viewportWidth = window.innerWidth;
    nav.classList.remove("nav-active");
    burger.classList.remove("toggle");
    navLinks.forEach((link) => (link.style.animation = ""));
    if (viewportWidth <= 768) {
        console.log(768);
    } else if (viewportWidth > 768 && viewportWidth <= 1024) {
        console.log(1024);
    } else {
        console.log("above 1024");
    }
};

window.addEventListener("resize", windowResize);
