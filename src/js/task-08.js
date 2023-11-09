const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", getLogin);

function getLogin(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const info = {
    email: email.value,
    password: password.value,
  };

  if (info.email === "" && info.password === "") {
    alert("Поля повинні бути заповнені!");
  } else {
    console.log(info);
  }
  formLogin.reset();
}
console.log(formLogin);
