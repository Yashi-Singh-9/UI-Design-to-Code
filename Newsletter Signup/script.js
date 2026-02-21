  document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const subscribeBtn = document.querySelector("button");

    // Create a feedback element and insert it above the button
    const feedback = document.createElement("p");
    feedback.style.marginBottom = "1rem";
    feedback.style.fontWeight = "500";
    feedback.style.display = "none"; // Hidden by default
    subscribeBtn.parentNode.insertBefore(feedback, subscribeBtn);

    subscribeBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();

      // Basic email validation
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
        feedback.style.display = "block";
        return;
      }

      // Simulate success message
      feedback.textContent = `A confirmation link has been sent to ${email}.`;
      feedback.style.color = "green";
      feedback.style.display = "block";
      emailInput.value = ""; // Clear the input field
    });
  });