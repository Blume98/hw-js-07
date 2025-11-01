const inputFocus = document.querySelector(`#name-input`);
const spanName = document.querySelector(`#name-output`);

inputFocus.addEventListener(`input`, (event) => {
  const value = event.currentTarget.value.trim();
  spanName.textContent = value === "" ? "Anonymous" : value;
});
