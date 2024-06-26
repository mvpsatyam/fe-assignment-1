let mobileMenu = document.querySelector(".site-mobile-menu");
let header = document.getElementById("site-header");
let menu = document.querySelector(".navbar__menu");
let branding = document.getElementById("site-branding");

mobileMenu.addEventListener("click", function () {
  const header = document.getElementById("site-header");
  const menu = document.querySelector(".navbar__menu");
  const branding = document.getElementById("site-branding");
  this.classList.toggle("active");
  menu.classList.toggle("active");
  branding.classList.toggle("hidden");
  header.classList.toggle("mobile-menu");

  window.addEventListener("resize", function () {
    if (window.innerWidth > 916) {
      mobileMenu.classList.remove("active");
      menu.classList.remove("active");
      branding.classList.remove("hidden");
      header.classList.remove("mobile-menu");
    }
  });
});

let liElements = document.querySelectorAll("li.navbar__item.navbar__dropdown");
liElements.forEach(function (li) {
  li.addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownMenu = this.querySelector(".navbar__dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("show");
    }
  });
});
