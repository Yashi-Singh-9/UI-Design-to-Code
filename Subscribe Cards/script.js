document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.querySelector('button');
    const emailInput = document.getElementById('email');
    const errorSpan = document.querySelector('.error');
    const successMsg = document.querySelector('.success');

    formButton.addEventListener('click', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Reset messages
      errorSpan.textContent = "";
      successMsg.textContent = "";

      if (!email) {
        errorSpan.textContent = "Email is required.";
        emailInput.focus();
        return;
      }

      if (!emailRegex.test(email)) {
        errorSpan.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
      }

      successMsg.textContent = "You've been subscribed successfully!";
      emailInput.value = "";
    });
  });