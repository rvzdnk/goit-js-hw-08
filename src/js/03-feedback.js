// Import lodash.throttle library
import throttle from 'lodash.throttle';

// QS
const form = document.querySelector(".feedback-form");

// Event listener to inout data to local storage
form.addEventListener("input", throttle(addToStorage, 500));

// Function which save the data to local storage
function addToStorage (e){
    localStorage.setItem("feedback-form-state", JSON.stringify(inputValues(e)));
}


//Function which reload values from local stroage
function ReloadValuesFromStorage() {
    if (JSON.parse(localStorage.getItem("feedback-form-state")) === null){
    return;
    }

    const {email, message} = form.elements;

    const getValues = JSON.parse(localStorage.getItem("feedback-form-state"));

    getValues.email = email.value;
    getValues.message = message.value;
}

ReloadValuesFromStorage();

//Function which clean the storage
form.addEventListener("submit", clearStorage);

function clearStorage(e){
    e.preventDefault();
    console.log(inputValues(e));
    localStorage.removeItem("feedback-form-state");
    e.currentTarget.reset();
}

// Function which return the current values of the input form
function inputValues (e){
    e.preventDefault();
    const formValues = {};
    
    const {
        elements: { email, message },
      } = e.currentTarget;

    formValues.email = email.value;
    formValues.message = message.value;

     return formValues;
}