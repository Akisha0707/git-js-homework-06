let counterValue = 0;
const buttonDecrement = document.querySelector("[data-action = decrement]");
const buttonIncrement = document.querySelector("[data-action = increment]");

const decrement = () => {
  console.log((counterValue = counterValue - 1));
};
buttonDecrement.addEventListener("click", decrement);

const increment = () => {
  console.log((counterValue = counterValue + 1));
};
buttonIncrement.addEventListener("click", increment);
