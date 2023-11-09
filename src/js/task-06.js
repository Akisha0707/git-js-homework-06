const focusInput = document.querySelector("#validation-input");
focusInput.addEventListener("blur", focuselemInput);

function focuselemInput(event) {
  const even = event.currentTarget;
  if (Number(even.value.trim().length) === Number(even.dataset.length)) {
    even.classList.add("valid");
    even.classList.remove("invalid");
  } else {
    even.classList.add("invalid");
    even.classList.remove("valid");
  }
}
