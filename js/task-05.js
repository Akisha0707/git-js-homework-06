const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", textChange);

function textChange(event) {
  console.log(event);
  console.log(textInput);
  textInput.value === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = event.currentTarget.value);
}
