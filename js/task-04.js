let counterValue = 0;

let buttonValue = document.querySelector("#value");
const buttonDecrement = document.querySelector("[data-action = decrement]");
const buttonIncrement = document.querySelector("[data-action = increment]");

const decrement = () => {
  buttonValue.textContent = counterValue -= 1;
};
buttonDecrement.addEventListener("click", decrement);

const increment = () => {
  buttonValue.textContent = counterValue += 1;
};
buttonIncrement.addEventListener("click", increment);
