document.addEventListener("DOMContentLoaded", () => {
  let navBarLinks = document.querySelectorAll("auto-group-vdcb-fzF a");
  navBarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navBarLinks.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
