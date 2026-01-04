document
  .getElementById("trialForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let termsChecked = document.getElementById("terms").checked;
    let emailError = "";
    let termsError = "";
    let successMessage = "";

    // Check if email is empty
    if (email.trim() === "") {
      emailError = "Email address is required.";
    }
    // Check if email is in correct format
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      emailError = "Please enter a valid email address.";
    }

    // Check if terms are accepted
    if (!termsChecked) {
      termsError = "You must agree to the terms and conditions.";
    }

    // Show errors or success message
    if (emailError || termsError) {
      document.getElementById("error-message").innerHTML = `
      <p style="color: red;">${emailError}</p>
      <p style="color: red;">${termsError}</p>
    `;
      document.getElementById("success-message").innerHTML = "";
    } else {
      successMessage = "Successful download link has been sent to your email!";
      document.getElementById("error-message").innerHTML = "";
      document.getElementById(
        "success-message"
      ).innerHTML = `<p style="color: green;">${successMessage}</p>`;
      document.getElementById("trialForm").reset(); // Optional: reset the form after submission
    }
  });
