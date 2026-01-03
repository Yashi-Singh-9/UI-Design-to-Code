// Get all the radio buttons
const radioButtons = document.querySelectorAll('input[name="rating"]');
const contactConsentCheckbox = document.getElementById("contact-consent");
const contactConsentError = document.getElementById("contact-consent-error");
const successMessage = document.getElementById("success-message");
const feedbackModal = document.querySelector(".feedback-modal");

// Function to apply styles to the selected label
function applyStyles() {
  // Remove styles from all labels
  const labels = document.querySelectorAll(".rating-options label");
  labels.forEach((label) => {
    label.style.boxShadow = "";
    label.style.transform = "scale(1)";
    label.style.color = ""; // Remove any color changes from text
  });

  // Get the selected radio button and its associated label
  const selectedRadio = document.querySelector('input[name="rating"]:checked');
  const associatedLabel = document.querySelector(
    `label[for="${selectedRadio.id}"]`
  );

  // Apply styles to the selected label
  associatedLabel.style.boxShadow = "4px 4px 10px rgba(255, 40, 40, 0.25)";
  associatedLabel.style.transform = "scale(1.05)";
  associatedLabel.style.color = "#000"; // Change color of the text
}

// Attach the applyStyles function to each radio button
radioButtons.forEach((radio) => {
  radio.addEventListener("change", applyStyles);
});

// Initialize the styles for the initially checked radio button
document.addEventListener("DOMContentLoaded", applyStyles);

// Form submission logic
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Check if the privacy policy checkbox is checked
  if (!contactConsentCheckbox.checked) {
    contactConsentError.style.display = "block"; // Show the error message
    successMessage.style.display = "none"; // Hide the success message if there's an error
  } else {
    contactConsentError.style.display = "none"; // Hide the error message
    successMessage.style.display = "block"; // Show the success message

    // Close the modal after a short delay to show the success message
    setTimeout(function () {
      feedbackModal.style.display = "none"; // Close the modal
    }, 2000); // Close modal after 2 seconds
  }
});

// Cancel button logic
const cancelButton = document.getElementById("cancel");

cancelButton.addEventListener("click", function () {
  feedbackModal.style.display = "none"; // Close the modal
});
