let page = document.body.id;

const formSignup = document.getElementById('form-signup');
const formLogin = document.getElementById('form-login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const referral = document.getElementById('referral-code');

const eye = document.querySelector(".fa-eye");

const emailValidation = document.getElementById("email-validation");
const passwordValidation = document.getElementById("password-validation");
const referralValidation = document.getElementById("ref-code-validation");

if (page === 'home') {

} else if (page === 'signin') {
    formLogin.addEventListener('click', disableValidation);

} else if (page === 'signup') {

    formSignup.addEventListener('click', disableValidation);

    formSignup.addEventListener('submit', (e) => {
        const isPasswordValid = validatePassword();
        const isEmailValid = validateEmail();
        // const isReferralCodeValid = validateReferral();

        if (!isEmailValid) {
            e.preventDefault();
            emailValidation.classList.remove("d-none");
            emailValidation.classList.add("d-block");
        }
        if (!isPasswordValid) {
            e.preventDefault();
            passwordValidation.classList.remove("d-none");
            passwordValidation.classList.add("d-block");
        }
        // if (!isReferralCodeValid) {
        //     e.preventDefault();
        //     referralValidation.classList.remove("d-none");
        //     referralValidation.classList.add("d-block");
        // }
    
    });
}

var state = false;

function toggle() {
    if (state) {
        password.setAttribute("type", "password");
        state = false;
    } else {
        password.setAttribute("type", "text");
        state = true;
    }
}

function disableValidation() {
    emailValidation.classList.remove("d-block");
    emailValidation.classList.add("d-none");
    passwordValidation.classList.remove("d-block");
    passwordValidation.classList.add("d-none");
    // referralValidation.classList.remove("d-block");
    // referralValidation.classList.add("d-none");
}

function validateEmail() {
    const emailValue = email.value.trim();
    let isEmailValid = null;

    if ( emailValue === '' || emailValue == null ) {
        isEmailValid = false;
    } else {
        isEmailValid = true;
    }

    console.log(isEmailValid);

    return isEmailValid;
}

function validatePassword() {
    const passwordValue = password.value.trim();
    let passwordErrorArray = [];

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

    console.log(passwordErrorArray);

    const isPasswordValid = !passwordErrorArray.includes(false);
    console.log(isPasswordValid);

    return isPasswordValid;

}

// function validateReferral() {
//     const referralValue = referral.value.trim();
//     let isReferralCodeValid = null;

//     if ( referralValue === '' || referralValue == null ) {
//         isReferralCodeValid = false;
//     } else {
//         isReferralCodeValid = true;
//     }

//     console.log(isReferralCodeValid);
        
//     return isReferralCodeValid;
// }


