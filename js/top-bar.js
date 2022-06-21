const mobileTopBarMoreBtn = document.querySelector(".mobile-top-bar-more-btn");
const topBarMenuBox = document.querySelector(".top-bar-menu-box");

mobileTopBarMoreBtn.addEventListener("click", () => {
  topBarMenuBox.classList.toggle("active");
});
