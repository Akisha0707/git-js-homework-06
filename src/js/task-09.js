function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
getRandomHexColor();

const changeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColor.addEventListener("click", getChangeColor);

function getChangeColor(event) {
  const newColor = (event.currentTarget.style.backgroundColor =
    getRandomHexColor());
  colorSpan.textContent = newColor;
}
