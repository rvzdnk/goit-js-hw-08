// Import lodash.throttle library
import throttle from 'lodash.throttle';

// QS
const form = document.querySelector('.feedback-form');

// Event listener
form.addEventListener('input', throttle(addToStorage, 500, { trailing: false }));
form.addEventListener('submit', resetStorage);

reloadValuesFromStorage()

// Function which return the current values of the input form
function inputValues (e) {
    e.preventDefault();
    const formValues = {};
    const {
      elements: { email, message },
    } = e.currentTarget;
   
    formValues.email = email.value;
    formValues.message = message.value;
    return formValues;
  }


//Function which reload values from local stroage
function reloadValuesFromStorage() {
    if (jsonParse('feedback-form-state') === null) {
      return;
    }

    let getValues = jsonParse('feedback-form-state');
    feedbackForm.elements.email.value = getValues.email;
    feedbackForm.elements.message.value = getValues.message;
  }


//Function which clean the storage
function resetStorage(e){
    e.preventDefault();
    console.log(inputValues(e));
    localStorage.removeItem('feedback-form-state');
    form.reset();
}

// Function which save the data to local storage
function addToStorage (e){
    jsonStringify('feedback-form-state', inputValues(e))
}

function jsonStringify(key, func) {
    try {
      localStorage.setItem(key, JSON.stringify(func));
    } catch (error) {
      console.log(error.name);
    }
  }

  function jsonParse(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error.name);
    }
  }