
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwdConfirm');

const inputs = document.querySelectorAll('input[required]');
const form = document.querySelector('form');
const submit = document.querySelector('#submit-button');
const mismatch = document.querySelector('#mismatch-pwd');
const missing = document.querySelector('#missing');

// Check if pwd is focused
pwd.addEventListener('focus', function(){
    mismatch.style.display = 'none';
    this.classList.remove('error');

});

pwdConfirm.addEventListener('focus', function(){
    mismatch.style.display = 'none';
    this.classList.remove('error');
});

// Submit functionality
submit.addEventListener('click', function(e) {
    
    let isFormValid = true;
      inputs.forEach(input => {
        if(!input.checkValidity()){
            isFormValid = false;
        }
    });

    if (!pwd.checkValidity())
    {
        isFormValid = false;
    }
    else {
        if (pwd.value !== pwdConfirm.value)
        {
            mismatch.textContent = '* Passwords do not match!';
            mismatch.style.display = 'inline';
            isFormValid = false;
            pwd.classList.add('error');
            pwdConfirm.classList.add('error');
            console.log(pwd.value);
            console.log(pwdConfirm.value);
            e.preventDefault();
        }
        else {
            mismatch.style.display = 'none';
            //e.preventDefault();
        }

    }
    
    
    if (!isFormValid){
        e.preventDefault();
        //highlightError();
        //alert("Please fill out all fields correctly");
        missing.textContent = 'One or more fields is not filled out properly';
        missing.style.display = 'block';
        console.log("ERROR");
    }
    else {
        missing.style.display = 'none';
        pwd.classList.remove('error');
        pwdConfirm.classList.remove('error');
        form.submit();
        form.reset();
        
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                alert("Your sign up has been successfully submitted!");

            });
     
        });
        e.preventDefault();
    }
});


