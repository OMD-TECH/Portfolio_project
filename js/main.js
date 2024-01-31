document.addEventListener("DOMContentLoaded", () => {
  const mobileView = document.getElementById("mobile-view");
  const navList = document.querySelector(".auto-group-vdcb-fzF");

  mobileView.addEventListener("click", () => {
    navList.classList.toggle("show");
    mobileView.classList.toggle("active");
  });
});
