document.addEventListener("DOMContentLoaded", () => {
    const monthlyPlan = document.getElementById("monthly-plan");
    const yearlyPlan = document.getElementById("yearly-plan");
    const totalBilled = document.querySelector(".billing-summary h3");
    const termsText = document.querySelector(".terms");
    const planLabels = document.querySelectorAll(".plan-options label");
    const paymentForm = document.getElementById("payment-form");
    const popup = document.createElement("div"); // For success popup
  
    // Function to update total billed and terms dynamically
    const updatePlan = (plan) => {
      planLabels.forEach((label) => label.classList.remove("selected"));
  
      if (plan === "monthly") {
        totalBilled.textContent = "Total billed $7";
        termsText.innerHTML =
          "By subscribing you agree to our Use of Service. Your payment method will be charged with $7 and you’ll have access to all locked features until 20 Jan 2022.";
        monthlyPlan.parentElement.classList.add("selected");
      } else if (plan === "yearly") {
        totalBilled.textContent = "Total billed $50";
        termsText.innerHTML =
          "By subscribing you agree to our Use of Service. Your payment method will be charged with $50 and you’ll have access to all locked features until 20 Jan 2022.";
        yearlyPlan.parentElement.classList.add("selected");
      }
    };
  
    // Add event listeners to radio buttons
    monthlyPlan.addEventListener("change", () => {
      if (monthlyPlan.checked) {
        updatePlan("monthly");
      }
    });
  
    yearlyPlan.addEventListener("change", () => {
      if (yearlyPlan.checked) {
        updatePlan("yearly");
      }
    });
  
    // Validate form inputs
    paymentForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission
  
      // Clear previous errors
      const errorContainers = document.querySelectorAll(".error-container");
      errorContainers.forEach((container) => container.remove());
  
      const cardNumber = document.getElementById("card-number").value.trim();
      const expirationDate = document
        .getElementById("expiration-date")
        .value.trim();
      const securityCode = document.getElementById("security-code").value.trim();
      let isValid = true;
  
      // Validate card number (16 digits)
      if (!/^\d{16}$/.test(cardNumber)) {
        createErrorMessage(
          "card-number",
          "Please enter a valid 16-digit card number."
        );
        isValid = false;
      }
  
      // Validate expiration date (MM/YY) and check if it's a future date
      if (!/^\d{2}\/\d{2}$/.test(expirationDate)) {
        createErrorMessage(
          "expiration-date",
          "Please enter a valid expiration date in MM/YY format."
        );
        isValid = false;
      } else {
        const [month, year] = expirationDate.split("/").map(Number);
        const currentDate = new Date();
        const currentYear = parseInt(
          currentDate.getFullYear().toString().slice(-2)
        );
        const currentMonth = currentDate.getMonth() + 1;
  
        if (
          month < 1 ||
          month > 12 ||
          year < currentYear ||
          (year === currentYear && month < currentMonth)
        ) {
          createErrorMessage(
            "expiration-date",
            "Please enter a valid future expiration date."
          );
          isValid = false;
        }
      }
  
      // Validate security code (3 digits)
      if (!/^\d{3}$/.test(securityCode)) {
        createErrorMessage(
          "security-code",
          "Please enter a valid 3-digit security code."
        );
        isValid = false;
      }
  
      if (isValid) {
        // Display success popup
        showSuccessPopup();
      }
    });
  
    // Function to create error messages under the corresponding input field
    const createErrorMessage = (inputId, message) => {
      const inputField = document.getElementById(inputId);
      const errorContainer = document.createElement("div");
      errorContainer.classList.add("error-container");
      errorContainer.innerHTML = `<p>${message}</p>`;
      inputField.parentElement.appendChild(errorContainer);
    };
  
    // Function to show success popup
    const showSuccessPopup = () => {
      popup.classList.add("popup");
      popup.innerHTML = `
        <div class="popup-content">
          <h2>Payment Successful</h2>
          <p>Thank you for subscribing!</p>
          <button class="close-popup">Close</button>
        </div>
      `;
      document.body.appendChild(popup);
  
      // Close popup on button click
      document.querySelector(".close-popup").addEventListener("click", () => {
        popup.remove();
        resetContainer(); // Reset form and selected plan when popup is closed
      });
    };
  
    // Function to reset the form and remove the selected state from plan options
    const resetContainer = () => {
      // Reset form fields
      paymentForm.reset();
  
      // Remove the selected class from both plans
      planLabels.forEach((label) => label.classList.remove("selected"));
  
      // Set the default selected plan (e.g., yearly plan) and show the corresponding price
      const yearlyPlanLabel = yearlyPlan.parentElement;
      yearlyPlanLabel.classList.add("selected");
      totalBilled.textContent = "Total billed $50"; // Change this to the default billing amount
      termsText.innerHTML =
        "By subscribing you agree to our Use of Service. Your payment method will be charged with $50 and you’ll have access to all locked features until 20 Jan 2022.";
    };
  });
  