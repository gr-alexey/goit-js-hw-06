const spanOqject = document.querySelector('span');
let counterValue = 0;
spanOqject.textContent = counterValue;

const decrementButton = document.querySelectorAll('button');

decrementButton[0].addEventListener('click', () => {
    counterValue -= 1;
    spanOqject.textContent = counterValue;
});

decrementButton[1].addEventListener('click', () => {
    counterValue += 1;
    spanOqject.textContent = counterValue;
});