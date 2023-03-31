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

function onInput(event) {
  console.log(
    event.currentTarget.email.value,
    event.currentTarget.message.value
  );

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: event.currentTarget.email.value,
      message: event.currentTarget.message.value,
    })
  );
}

formRef.addEventListener(
  'input',
  _.throttle(onInput, 500, { trailing: false })
);

formRef.addEventListener('submit', onSubmit);

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
