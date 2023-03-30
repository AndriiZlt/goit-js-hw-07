const _ = require('lodash');
const inputRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');
const formRef = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  inputRef.value = email;
  messageRef.value = message;
}

const onInput = function (event) {
  const currentFormElements = event.currentTarget.elements;
  console.log(
    currentFormElements.email.value,
    currentFormElements.message.value
  );
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: currentFormElements.email.value,
      message: currentFormElements.message.value,
    })
  );
};

formRef.addEventListener('submit', onSubmit);
formRef.addEventListener('input', onInput);

function onSubmit(event) {
  event.preventDefault();
  const allFormData = {};
  const formElements = event.currentTarget.elements;
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    allFormData[name] = value;
  });
  inputRef.value = '';
  messageRef.value = '';
  localStorage.clear();
  console.log('Last values:', allFormData);
}
