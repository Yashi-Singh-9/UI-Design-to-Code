document.querySelector(".login").addEventListener("click", function (e) {
    e.preventDefault();
  
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.querySelector(".error-email");
    const passwordError = document.querySelector(".error-password");
  
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
    let isValid = true;
  
    // Reset previous errors
    emailError.textContent = "";
    passwordError.textContent = "";
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    // Password validation
    if (!password) {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    }
  });
  