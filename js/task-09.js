function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button');
const page = document.querySelector('body');
const color = document.querySelector('span');

button.addEventListener('click', changeColor);

function changeColor(e) {
  page.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
};