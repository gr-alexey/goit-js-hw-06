const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) { 
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userEmail = e.currentTarget.elements.email.value;
    const userPassword = e.currentTarget.elements.password.value;

    if (userEmail === '' || userPassword === '') {
    alert('Все поля должны быть заполнены!');
    } else {
        let user = {
            email: '',
            password: '',
        }
        user.email = e.currentTarget.elements.email.value;
        user.password = e.currentTarget.elements.password.value;
        console.log(user)
    }
    form.reset();
};
