// Get the modal, buttons, input field, and other elements
const modal = document.getElementById("modal");
const closeButtons = document.querySelectorAll(".close, .close-button");
const cancelButton = document.querySelector(".cancel-button");
const neverMindButton = document.querySelector(".close-button");
const confirmInput = document.getElementById("confirm");
const checkboxGroup = document.querySelector(".checkbox-group");
const checkboxes = document.querySelectorAll(
  '.checkbox-group input[type="checkbox"]'
);

// Get the error message elements and success message container
const errorMessageInput = document.querySelector(".error-message-input");
const errorMessageCheckbox = document.querySelector(".error-message-checkbox");
const successMessage = document.createElement("p");

// Styling for error and success messages
errorMessageInput.style.color = "red";
errorMessageCheckbox.style.color = "red";
successMessage.style.color = "green";
successMessage.style.fontWeight = "bold";
successMessage.style.marginBottom = "20px";

// Insert the success message above the "Cancel Plan" button
document
  .querySelector(".button-group")
  .insertBefore(successMessage, cancelButton);

// Function to reset the form (after successful cancellation)
function resetForm() {
  confirmInput.value = ""; // Clear input field
  checkboxes.forEach((checkbox) => (checkbox.checked = false)); // Uncheck all checkboxes
  errorMessageInput.textContent = ""; // Clear input error message
  errorMessageCheckbox.textContent = ""; // Clear checkbox error message
  successMessage.textContent = ""; // Clear success message
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking on 'close' (×) or 'Never mind' button
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    closeModal(); // Close the modal without resetting the form
  });
});

// Cancel Plan button validation
cancelButton.addEventListener("click", function () {
  const userInput = confirmInput.value.trim().toUpperCase(); // Get the input value and convert to uppercase

  // Reset messages
  errorMessageInput.textContent = "";
  errorMessageCheckbox.textContent = "";
  successMessage.textContent = "";

  // Check if a checkbox is selected
  let isCheckboxChecked = Array.from(checkboxes).some(
    (checkbox) => checkbox.checked
  );
  if (!isCheckboxChecked) {
    errorMessageCheckbox.textContent =
      "Please choose the reason for the cancellation of the plan.";
    return; // Stop further validation if no checkbox is selected
  }

  // Input validation
  if (userInput === "") {
    errorMessageInput.textContent = "Please type CANCEL in the input.";
  } else if (userInput !== "CANCEL") {
    errorMessageInput.textContent = "Please type CANCEL.";
  } else {
    // If everything is valid, show success message
    successMessage.textContent = "Thanks for confirming!";

    // Reset the form after the success message
    setTimeout(function () {
      resetForm(); // Reset the form without closing the modal
    }, 2000); // Delay before reset (2 seconds)
  }
});

// Never Mind button also closes the modal
neverMindButton.addEventListener("click", function () {
  closeModal(); // Close the modal without resetting the form
});
