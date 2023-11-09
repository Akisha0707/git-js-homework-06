function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
getRandomHexColor();

const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBody = document.querySelector("body");

changeColor.addEventListener("click", getChangeColor);

function getChangeColor(event) {
  const newColor = (colorBody.style.backgroundColor = getRandomHexColor());
  colorSpan.textContent = newColor;
}
