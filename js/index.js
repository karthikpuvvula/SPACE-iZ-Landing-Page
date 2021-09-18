const formSignup = document.getElementById('form-signup');
const email = document.getElementById('email');
const password = document.getElementById('password');
const referral = document.getElementById('referral-code');

const eye = document.getElementById("eye");

const emailValidation = document.getElementById("email-validation");
const passwordValidation = document.getElementById("password-validation");
const referralValidation = document.getElementById("ref-code-validation");

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

formSignup.addEventListener('click', () => {
    emailValidation.classList.remove("d-block");
    emailValidation.classList.add("d-none");
    passwordValidation.classList.remove("d-block");
    passwordValidation.classList.add("d-none");
    // referralValidation.classList.remove("d-block");
    // referralValidation.classList.add("d-none");
});

formSignup.addEventListener('submit', (e) => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const referralValue = referral.value.trim();

    let isEmailValid = null;
    let passwordErrorArray = [];
    let isReferralCodeValid = null;

    if ( emailValue === '' || emailValue == null ) {
        isEmailValid = false;
    } else {
        isEmailValid = true;
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

    if ( referralValue === '' || referralValue == null ) {
        isReferralCodeValid = false;
    } else {
        isReferralCodeValid = true;
    }

    console.log(passwordErrorArray);

    const isPasswordValid = !passwordErrorArray.includes(false);

    console.log(isEmailValid);
    console.log(isPasswordValid);
    console.log(isReferralCodeValid);

    if ( isEmailValid || isPasswordValid ) {
        e.preventDefault();
        if (!isEmailValid) {
            emailValidation.classList.remove("d-none");
            emailValidation.classList.add("d-block");
        }
        if (!isPasswordValid) {
            passwordValidation.classList.remove("d-none");
            passwordValidation.classList.add("d-block");
        }
        // if (!isReferralCodeValid) {
        //     referralValidation.classList.remove("d-none");
        //     referralValidation.classList.add("d-block");
        // }
    }
    
});
