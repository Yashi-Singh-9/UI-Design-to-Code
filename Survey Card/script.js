// Get references to the DOM elements
const feedbackForm = document.getElementById("feedbackForm");
const radioButtons = document.querySelectorAll('input[name="feedback"]');
const submitButton = document.querySelector(".submit-btn");
const cancelButton = document.querySelector(".cancel-btn");
const successMessage = document.createElement("p");
const errorMessage = document.createElement("p");
const optionsContainer = document.querySelector(".options");
const buttonsContainer = document.querySelector(".buttons"); // Container for the buttons

// Function to handle the form submission
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Check if any radio button is selected
  let feedbackSelected = false;
  radioButtons.forEach((radio) => {
    if (radio.checked) {
      feedbackSelected = true;
    }
  });

  // Reset previous messages
  successMessage.textContent = "";
  errorMessage.textContent = "";

  if (feedbackSelected) {
    // Display success message if feedback is selected
    successMessage.textContent = "Thank you for your feedback!";
    successMessage.style.color = "#1b2b5c"; // Set success message color
    successMessage.style.fontWeight = "600";
    successMessage.style.fontSize = "1rem";
    successMessage.style.marginBottom = "1rem";

    // Insert the success message just above the buttons container
    feedbackForm.insertBefore(successMessage, buttonsContainer);

    // Reset the form after showing the success message (with a delay)
    setTimeout(() => {
      feedbackForm.reset();
      successMessage.textContent = ""; // Clear success message after reset
    }, 2000); // 2 seconds delay to allow the user to see the success message
  } else {
    // Display error message if no feedback is selected
    errorMessage.textContent = "Please select a feedback option.";
    errorMessage.style.color = "#e74c3c"; // Set error message color
    errorMessage.style.fontWeight = "600";
    errorMessage.style.fontSize = "1rem";
    optionsContainer.appendChild(errorMessage); // Add error message below the radio buttons
  }
});

// Function to handle the cancel action (close the form/modal)
cancelButton.addEventListener("click", function () {
  // Reset the form and remove any success/error messages
  feedbackForm.reset();
  successMessage.textContent = "";
  errorMessage.textContent = "";
});
