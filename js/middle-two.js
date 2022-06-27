let middleTwoTextRight = document.querySelectorAll(".middle-two-text-right");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (1833 > value || value > 2860) {
    middleTwoTextRight[0].style.animation =
      "disappear  1s ease-in-out forwards";
    middleTwoTextRight[1].style.animation =
      "disappear  1s ease-in-out forwards";
    console.log(value);
  } else {
    middleTwoTextRight[0].style.animation = "slide 1s ease-in-out forwards";
    middleTwoTextRight[1].style.animation = "slide 1s ease-in-out forwards";
    console.log(value);
  }
});
