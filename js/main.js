window.onload = function() {
// VARIABLES
var burger = document.querySelector(".burger");
var secretNav = document.querySelector(".secret-nav");
var header = document.querySelector("header");
var main = document.querySelector("main");

// RESPONSIVE NAVIGATION
burger.addEventListener("click", function() {
    secretNav.classList.toggle("secret-nav-visible");;
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    header.classList.toggle("header-move");
    main.classList.toggle("header-move");
  });
};

//#7FCEFF
