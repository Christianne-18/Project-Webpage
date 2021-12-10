const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const current = 0;
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href === document.URL) {
    current = i;
  }
}
document.links[current].idName = "current";
