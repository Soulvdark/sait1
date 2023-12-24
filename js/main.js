function click() {
  const toggleclick = document.querySelector(".ball-blue");
  const toggleclickinactive = document.querySelector(".ball-inactive");
  let el = document.documentElement;
  toggleclick.addEventListener("click", () => {
    if (el.hasAttribute("ball-blue")) {
      el.removeAttribute("class", "ball-inactive");
    } else {
      el.setAttribute("ball-blue");
    }
  });
  toggleclickinactive.addEventListener("click", () => {
    if (el.hasAttribute("ball-inactive")) {
      el.removeAttribute("ball-inactive");
    } else {
      el.setAttribute("ball-inactive");
    }
  });
}
theme();

// const blue = document.querySelector(".ball-blue");
// const gary = document.querySelector(".ball-inactive");
// let el = document.documentElement;
// gray.addEventListener("click", function () {
//   if (el.hasAttribute("ball-blue")) {
//     el.removeAttribute("class", "ball-inactive");
//   }
// });
// blue.addEventListener("click", function () {
//   if (el.hasAttribute("ball-inactive")) {
//     el.removeAttribute("class", "ball-blue");
//   }
// });
// blue();
// gray();
