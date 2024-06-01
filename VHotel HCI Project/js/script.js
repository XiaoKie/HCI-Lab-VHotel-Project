const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".sidemenu");
const closeIcon = document.querySelector(".close-icon");

toggle.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
});
closeIcon.addEventListener("click", function () {
  menu.classList.remove("show-menu");
});