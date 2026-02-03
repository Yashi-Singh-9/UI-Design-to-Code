function viewEveryone() {
    // Select the staff section
    const staffSection = document.querySelector(".staff-section");
  
    // Check if the message already exists
    let message = document.querySelector(".staff-message");
  
    if (!message) {
      // Create a new message element
      message = document.createElement("p");
      message.className = "staff-message";
      message.textContent = "More staff details coming soon!";
  
      // Insert the message above the button
      const button = document.querySelector(".view-everyone-btn");
      staffSection.insertBefore(message, button);
  
      // Optional: Remove the message after 3 seconds
      setTimeout(() => {
        message.remove();
      }, 3000);
    } else {
      // Toggle visibility if message already exists
      message.style.display = message.style.display === "none" ? "block" : "none";
    }
  }
  