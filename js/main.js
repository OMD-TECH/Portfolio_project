const nav_btn = document.getElementById("nav_btn");
const home = document.querySelector(".hero-coh");
const mobile = document.querySelector(".mobile-form");

document.addEventListener("DOMContentLoaded", () => {
  mobile.classList.add("close");
});

nav_btn.addEventListener("click", () => {
  home.classList.toggle("close");

  mobile.classList.toggle("close");
});

const element1 = document.querySelector(".link-list");
const element2 = document.querySelector(".link-lists");
document.addEventListener("DOMContentLoaded", () => {
  element2.classList.add("current");
});
element1.addEventListener("click", () => {
  element1.classList.add("current");
  element2.classList.remove("current");
});
element2.addEventListener("click", () => {
  element1.classList.remove("current");
  element2.classList.add("current");
});

function changeColor(index) {
  const ele_link = document.querySelectorAll(".frame-links");

  ele_link.forEach((p) => {
    p.classList.remove("active_click");
  });
  ele_link[index].classList.add("active_click");
}
