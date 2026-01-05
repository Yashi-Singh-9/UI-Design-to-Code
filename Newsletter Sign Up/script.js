document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const emailInput = document.getElementById("email").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let emailValid = true,
      checkboxValid = false;

    // Error message containers
    let emailError = document.getElementById("email-error");
    let checkboxError = document.getElementById("checkbox-error"); // New container for checkbox error
    let successMessage = document.getElementById("success-message");

    // Clear previous messages
    emailError.innerHTML = "";
    checkboxError.innerHTML = ""; // Clear checkbox error
    successMessage.innerHTML = "";

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput === "") {
      emailError.innerHTML = "Please enter an email address.";
      emailValid = false;
    } else if (!emailPattern.test(emailInput)) {
      emailError.innerHTML = "Please enter a valid email address.";
      emailValid = false;
    }

    // Checkbox validation
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        checkboxValid = true;
      }
    });

    if (!checkboxValid) {
      checkboxError.innerHTML = "Please select at least one newsletter."; // Display checkbox error separately
    }

    // Show success message if both email and checkbox validations pass
    if (emailValid && checkboxValid) {
      let selectedNewsletters = [];
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          selectedNewsletters.push(checkbox.value);
        }
      });
      successMessage.innerHTML =
        "Your selected newsletters (" +
        selectedNewsletters.join(", ") +
        ") will be sent on a daily/weekly basis.";
    }
  });
