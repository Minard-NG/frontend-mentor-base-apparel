let btn = document.querySelector('button');
let email = document.querySelector('input[type="email"]');
let error = document.querySelector('svg.error');


btn.addEventListener('click', (e)=>{
    if (email.value === '' || !email.validity.valid){
        error.style.opacity = 1;
        email.style.border = "1px solid #f96262";
    }
    else{
        email.value='';
        alert("You just signed up for greatness, keep an eye on your mail!")
    }
   
})