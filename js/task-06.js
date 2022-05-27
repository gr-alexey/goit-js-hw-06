const input = document.querySelector('input');
const maxLengthInput = input.dataset.length;
input.addEventListener('blur', onInputBlur);

function onInputBlur(e) {
    console.log(e.currentTarget.value.length);
    if ( input.value.length == maxLengthInput) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }       
}