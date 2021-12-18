let btn = document.querySelector('button');
let email = document.querySelector('input[type="email"]');
let error = document.querySelector('svg.error');

let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



btn.addEventListener('click', (e)=>{
    if (email.value === '' || !email.value.match(re)){
        error.style.opacity = 1;
        email.style.border = "1px solid #f96262";
    }
    else{
        email.value='';
        error.style.opacity = 0;
        alert("You just signed up for greatness, keep an eye on your mail!")
    }
   
})