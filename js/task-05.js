const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", textChange);

function textChange(event) {
  console.log(event.currentTarget.value);
  textInput.value.trim() === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = event.currentTarget.value);
}
