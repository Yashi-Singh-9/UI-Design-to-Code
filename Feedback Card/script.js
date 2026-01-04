function sendFeedback() {
    // Get values of the text area and checkboxes
    var feedbackText = document.getElementById("feedback-text").value;
    var contactCheckbox = document.getElementById("contact-checkbox").checked;
    var researchCheckbox = document.getElementById("research-checkbox").checked;
  
    // Get the error message containers
    var textareaError = document.getElementById("textarea-error");
    var checkboxError = document.getElementById("checkbox-error");
    var successMessage = document.getElementById("success-message");
  
    // Clear previous messages
    textareaError.style.display = "none";
    checkboxError.style.display = "none";
    successMessage.style.display = "none";
  
    // Flags to check if there's an error
    let errorFound = false;
  
    // Check if the textarea is empty
    if (feedbackText.trim() === "") {
      textareaError.style.display = "block";
      textareaError.innerHTML = "Please provide your feedback.";
      errorFound = true;
    }
  
    // Only check if the "privacy policy" checkbox is unchecked
    if (!contactCheckbox) {
      checkboxError.style.display = "block";
      checkboxError.innerHTML = "Please agree to the privacy policy.";
      errorFound = true;
    }
  
    // If there are no errors, show the success message
    if (!errorFound) {
      successMessage.style.display = "block";
      successMessage.innerHTML = "Thank you for your feedback!";
    }
  }
  