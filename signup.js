
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwdConfirm');

const inputs = document.querySelectorAll('input[required]');
const form = document.querySelector('form');
const submit = document.querySelector('#submit-button');

submit.addEventListener('click', function(e) {
    
    let isFormValid = true;

    inputs.forEach(input => {
        if(!input.checkValidity()){
            input.classList.add('invalid');
            isFormValid = false;
        }
        else {
            input.classList.add('valid');
        }
    });
    
    if (!isFormValid){
        e.preventDefault();
        console.log("ERROR");
    }
    else {
        form.submit();
    }
});


