document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const continueButton = document.querySelector(".email-info button");
    const errorSpan = document.querySelector(".email-info span");
  
    function isValidEmail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }
  
    continueButton.addEventListener("click", (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
  
      if (!email) {
        errorSpan.textContent = "Email address is required.";
        return;
      }
  
      if (!isValidEmail(email)) {
        errorSpan.textContent = "Enter a valid email address.";
        return;
      }
  
      errorSpan.textContent = "";
    });
  
    emailInput.addEventListener("input", () => {
      if (errorSpan.textContent) {
        errorSpan.textContent = "";
      }
    });
  });
  