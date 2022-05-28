const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', inputChange);

function inputChange(e) {
    text.style.fontSize = input.value + "px";
};