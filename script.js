const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}

// accordian
var navSubMenus = document.querySelectorAll(".menu-link");

navSubMenus.forEach(function(navSubMenu) {
  navSubMenu.addEventListener("click", function() {
    var accordionItem = this.parentNode;
    accordionItem.classList.toggle("active");
  });
});

