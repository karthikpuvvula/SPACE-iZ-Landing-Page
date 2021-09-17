const email = document.getElementById('email');
const password = document.getElementById('password');
const formSignup = document.getElementById('formSignup');
const validationBox = document.getElementById('validation-box');
const eye = document.getElementById("eye");
const one = document.getElementById("one-check");
const two = document.getElementById("two");
const three = document.getElementById("three");


var state = false;

function toggle() {
    if (state) {
        password.setAttribute("type", "password");
        eye.style.color = '#7a797e';
        state = false;
    } else {
        password.setAttribute("type", "text");
        eye.style.color = '#58873f';
        state = true;
    }
}

password.addEventListener('click', () => {
    validationBox.style.display = "none";
});

formSignup.addEventListener('submit', (e) => {
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    let emailErrorArray = [];
    let passwordErrorArray = [];

    if ( emailValue === '' || emailValue == null ) {
        emailErrorArray.push(false);
    } else {
        emailErrorArray.push(true);
    }

    if (passwordValue.length < 8) {
        passwordErrorArray.push(false);
        document.getElementById("one-check").classList.add("d-none");
    } else {
        passwordErrorArray.push(true);
        document.getElementById("one-x").classList.add("d-none");
    }

    if (/\d/.test(passwordValue)) {
        passwordErrorArray.push(true);
        document.getElementById("two-x").classList.add("d-none");
    } else {
        passwordErrorArray.push(false);
        document.getElementById("two-check").classList.add("d-none");
    }

    if (/[A-Z]/.test(passwordValue)) {
        passwordErrorArray.push(true);
        document.getElementById("three-x").classList.add("d-none");
    } else {
        passwordErrorArray.push(false);
        document.getElementById("three-check").classList.add("d-none");
    }

    console.log(emailErrorArray);
    console.log(passwordErrorArray);

    if (passwordErrorArray.includes(false) || emailErrorArray.includes(false)) {
        e.preventDefault();
        validationBox.style.display = "block";
    } 
});
