
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('is-valid');
    } else {
      nameInput.classList.remove('is-invalid');
      nameInput.classList.add('is-valid');
    }

    // Validate email
    if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    } else {
      emailInput.classList.remove('is-invalid');
      emailInput.classList.add('is-valid');
    }

    // Validate message
    if (messageInput.value.trim() === '') {
      isValid = false;
      messageInput.classList.add('is-invalid');
      messageInput.classList.remove('is-valid');
    } else {
      messageInput.classList.remove('is-invalid');
      messageInput.classList.add('is-valid');
    }

    if (isValid) {
      // Submit the form
      form.submit();
    }
  });

  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});