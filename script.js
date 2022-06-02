var inputWrapper = document.querySelector(".input-wrapper");
var button = document.querySelector(".input-wrapper button");
var form = document.querySelector("form");
form.addEventListener("submit", verifyEmailFunc);
function verifyEmailFunc(event) {
  event.preventDefault();
  inputWrapper.style.borderColor = "red";
}

//   hoisting

var inputWrapperInput = document.querySelector(".input-wrapper input");
inputWrapperInput.addEventListener("keyup", InputTextChange);

function InputTextChange() {
  inputWrapper.style.borderColor = "hsl(0, 36%, 70%)";
}
var heroImage = document.querySelector("#heroImage");
changeHeroByScreenSize();
function changeHeroByScreenSize() {
  var mobileImage = "/base-apparel-coming-soon-master/images/hero-mobile.jpg";
  var desktopImage = "/base-apparel-coming-soon-master/images/hero-desktop.jpg";
  if (window.innerWidth <= 800) {
    heroImage.setAttribute("src", mobileImage);
  } else {
    heroImage.setAttribute("src", desktopImage);
  }
}

// if (condition) {
//   statement;
// }
// console.log(window.innerWidth);
window.addEventListener("resize", changeHeroByScreenSize);
// Promise
// Fetch API
// DOM manipulation.
// Loop
// Arrays
// Conditional Statement
// Flex and Grid
