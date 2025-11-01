const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const objectUser = {
    email: login,
    password: password,
  };
  console.log("🚀 ~ objectUser:", objectUser);
  form.reset();
});
