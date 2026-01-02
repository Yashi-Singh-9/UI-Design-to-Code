// Select elements from the DOM
const emailInput = document.getElementById("emailInput");
const emailConfirmation = document.getElementById("emailConfirmation");
const emailDisplay = document.getElementById("emailDisplay");
const notYouLink = emailConfirmation.querySelector("a"); // Selecting the "Not you?" link
const form = document.querySelector("form");
const successMessage = document.createElement("p");
const errorMessage = document.createElement("p");

// Append success and error messages below the form, and style them
successMessage.style.display = "none";
successMessage.style.color = "green";
successMessage.style.fontSize = "16px";
form.appendChild(successMessage);

errorMessage.style.display = "none";
errorMessage.style.color = "red";
errorMessage.style.fontSize = "16px";
form.appendChild(errorMessage);

// Flag to track if "Not you?" has been clicked
let isCustomEmail = false;

// Function to display the success message
function showSuccessMessage(email) {
  successMessage.innerHTML = `Newsletter shall be sent to ${email}. If you don't receive it, check your spam folder. Still not there? Kindly change your email ID.`;
  successMessage.style.display = "block";
  errorMessage.style.display = "none";
  emailInput.style.display = "none"; // Hide email input
  emailInput.value = ""; // Clear the input field
  isCustomEmail = false; // Reset the flag
}

// Show the email input when "Not you?" is clicked
notYouLink.addEventListener("click", (e) => {
  e.preventDefault();
  emailInput.style.display = "block"; // Display the email input
  emailInput.focus(); // Focus on the email input field
  successMessage.style.display = "none"; // Hide success message
  errorMessage.style.display = "none"; // Hide error message
  isCustomEmail = true; // Set the flag to require custom email
});

// Form submission event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  // Case 1: If "Not you?" hasn't been clicked, show success for default email
  if (!isCustomEmail) {
    showSuccessMessage(emailDisplay.innerText); // Show success for default email
    return;
  }

  // Case 2: When "Not you?" has been clicked, validate the entered email
  if (emailValue === "") {
    errorMessage.innerHTML = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  // Validate the email format
  if (!validateEmail(emailValue)) {
    errorMessage.innerHTML = "Please enter a valid email address.";
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  // If valid, display success message and update email confirmation text
  emailDisplay.innerText = emailValue; // Update email confirmation text
  showSuccessMessage(emailValue);
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
