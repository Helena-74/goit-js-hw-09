import throttle from '../../node_modules/lodash.throttle';

function saveFormData(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const feedback = {
    email: formData.get('email'),
    message: formData.get('message')
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveFormData, 500));

window.addEventListener('DOMContentLoaded', function() {
  const savedState = localStorage.getItem('feedback-form-state');
  
  if (savedState) {
    const feedback = JSON.parse(savedState);
    form.elements.email.value = feedback.email;
    form.elements.message.value = feedback.message;
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const feedback = {
    email: form.elements.email.value,
    message: form.elements.message.value
  };

  localStorage.removeItem('feedback-form-state');
  form.reset();
  console.log(feedback);
});

