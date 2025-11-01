function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberColor = document.querySelector(`.color`);
const changeButton = document.querySelector(`.change-color`);

function changeColor(color) {
  document.body.style.backgroundColor = color;
  numberColor.textContent = color;
}

changeButton.addEventListener(`click`, () => changeColor(getRandomHexColor()));
