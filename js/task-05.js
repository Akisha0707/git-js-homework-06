const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", textChange);

function textChange(event) {
  textInput.value === ""
    ? (textOutput.textContent = event.currentTarget.value)
    : (textOutput.textContent = "Anonymous");
}
