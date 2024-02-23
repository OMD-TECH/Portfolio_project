const nav_btn = document.querySelector(".nav_btn");
const nav_close_btn = document.querySelector(".nav_close_btn");
const home = document.querySelector(".hero-coh");
const mobile = document.querySelector(".mobile-form");

document.addEventListener("DOMContentLoaded", () => {
  mobile.classList.add("close");
  nav_close_btn.classList.add("bar");
});

nav_btn.addEventListener("click", () => {
  home.classList.add("close");
  mobile.classList.remove("close");
  nav_btn.classList.remove("bar");
  nav_btn.classList.add("bar");
});
nav_close_btn.addEventListener("click", () => {
  home.classList.remove("close");
  mobile.classList.add("close");
  nav_close_btn.classList.add("bar");
  nav_btn.classList.remove("bar");
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
