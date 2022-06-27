const middleTwoTextRight = document.querySelectorAll(".middle-two-text-right");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (1551 > value || value > 2214) {
    middleTwoTextRight[0].style.animation = "disappear 1s ease-in-out forwards";
    middleTwoTextRight[1].style.animation = "disappear 1s ease-in-out forwards";
  } else {
    middleTwoTextRight[0].style.animation = "slide 1s ease-in-out forwards";
    middleTwoTextRight[1].style.animation = "slide 1s ease-in-out forwards";
  }
});
