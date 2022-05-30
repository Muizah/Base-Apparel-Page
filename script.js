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
