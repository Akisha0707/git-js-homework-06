const inputFontSize = document.querySelector("#font-size-control");
let textChange = document.querySelector("#text");

inputFontSize.addEventListener("input", inputSize);

function inputSize(event) {
  textChange.style.fontSize = event.currentTarget.value + "px";
}
