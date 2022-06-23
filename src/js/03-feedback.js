const throttle = require('lodash.throttle');

const form = document.querySelectorAll(".feedback-form")

form.addEventListener("input",throttle(formInput,500, {'trailing': false}));

function formInput (e){
    localStorage.setItem("feedback-form-state", JSON.stringify(createField(e)));
}

function createField (){
    if (JSON.parse(localStorage.getItem("feedback-form-state")) === null) {
        return;
      }
    
      const {email, message} = form.elements;
    
      const getValues = JSON.parse(localStorage.getItem("feedback-form-state"));
    
      email.value = getValues.email;
      message.value = getValues.message;  
    }


form.addEventListener("submit", formSubmit)

function formSubmit(e){
    e.preventDefault();
    console.log(currentFormValues(e));
    form.reset();
    localStorage.removeItem("feedback-form-state");
}

function currentFormValues(e) {
    const formValues = {};
  
    const {email, message} = e.currentTarget.elements;
  
    formValues.email = email.value;
    formValues.message = message.value;
  
    return formValues;
  }
