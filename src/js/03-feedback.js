const throttle = require('lodash.throttle');

const form = document.querySelectorAll(".feedback-form")

form.addEventListener("input",throttle(formInput,500));

function formInput (e){
    localStorage.setItem("feedback-form-state", JSON.stringify(createField(e)));
}

function createField (){
    return{
        email: form.elements.email.value,
        message: form.elements.message.value,   
    }
} 

form.addEventListener("submit", formSubmit)

function formSubmit(e){
    e.preventDefault();
    console.log(createField());
    form.reset();
    localStorage.removeItem("feedback-form-state");
}

