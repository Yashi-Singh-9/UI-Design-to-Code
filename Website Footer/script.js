document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector('input[type="email"]');
  
    // Create a message container to display messages
    const messageContainer = document.createElement("p");
    messageContainer.style.marginTop = "5px"; // Add space below the input
    messageContainer.style.fontSize = "14px"; // Adjust font size for readability
    messageContainer.style.color = "red"; // Default color for error messages
  
    // Wrap the input and message in a container for proper layout
    const inputWrapper = document.createElement("div");
    inputWrapper.style.display = "flex";
    inputWrapper.style.flexDirection = "column";
    inputWrapper.style.alignItems = "flex-start";
  
    // Place the email input inside the wrapper
    emailInput.parentNode.insertBefore(inputWrapper, emailInput);
    inputWrapper.appendChild(emailInput);
  
    // Add the message container below the input
    inputWrapper.appendChild(messageContainer);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission to server
  
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      // Clear previous messages
      messageContainer.innerHTML = "";
  
      // Validation logic
      if (email === "") {
        messageContainer.innerHTML = `Error: Email cannot be empty.`;
        messageContainer.style.color = "red";
      } else if (!email.includes("@") || !email.includes(".")) {
        messageContainer.innerHTML = `Error: Email is incomplete.`;
        messageContainer.style.color = "red";
      } else if (!emailRegex.test(email)) {
        messageContainer.innerHTML = `Error: Please enter a valid email format.`;
        messageContainer.style.color = "red";
      } else {
        messageContainer.innerHTML = `Thank you for subscribing!`;
        messageContainer.style.color = "green";
      }
    });
  });
  