const form = document.querySelector('form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const error = document.querySelectorAll('.error');

form.addEventListener('submit', (event) => {
    if (fname.value === '' || lname.value === '' || email.value === '' || message.value === '') {
        event.preventDefault();
        if (fname.value === '') {
            error[0].style.display = 'inline';
        }
        if (lname.value === '') {
            error[1].style.display = 'inline';
        }
        if (email.value === '') {
            error[2].style.display = 'inline';
        }
        if (message.value === '') {
            error[3].style.display = 'inline';
        }
    } else {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            event.preventDefault();
            error[2].style.display = 'inline';
        }
    }
});

window.addEventListener('pageshow', function() {
    if (sessionStorage.getItem('formSubmitted')) {
        document.getElementById('myForm').reset();
        sessionStorage.removeItem('formSubmitted');
    }
});

fname.addEventListener('input', () => {
    error[0].style.display = '';
});

lname.addEventListener('input', () => {
    error[1].style.display = '';
});

email.addEventListener('input', () => {
    error[2].style.display = '';
});

message.addEventListener('input', () => {
    error[3].style.display = '';
});