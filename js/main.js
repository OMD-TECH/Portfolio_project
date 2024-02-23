document.addEventListener("DOMContentLoaded", () => {
  const mobileView = document.getElementById("mobile-view");
  const navList = document.querySelector(".auto-group-vdcb-fzF");

  mobileView.addEventListener("click", () => {
    navList.classList.toggle("show");
    mobileView.classList.toggle("active");
  });
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

// const ele_link = document.querySelectorAll(".frame-links");
// ele_link.forEach((each_link) => {
//   each_link.addEventListener("click", () => {
//     ele_link.forEach((p) => {
//       p.classList.remove("active_click");
//     });
//     this.classList.add("active_click");
//   });
// });

function changeColor(index) {
  const ele_link = document.querySelectorAll(".frame-links");

  ele_link.forEach((p) => {
    p.classList.remove("active_click");
  });
  ele_link[index].classList.add("active_click");
}
