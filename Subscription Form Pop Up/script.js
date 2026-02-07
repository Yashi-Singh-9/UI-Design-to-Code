document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.querySelector(".fa-xmark");
    const mainForm = document.querySelector("main");
    const emailInput = document.getElementById("email");
    const submitBtn = document.querySelector("a");
    const errorMsg = document.querySelector(".error");
    const successMsg = document.querySelector(".success-message");

    // Close popup
    closeBtn.addEventListener("click", () => {
        mainForm.style.display = "none";
    });

    // Validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Handle submit
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        // Clear previous messages
        errorMsg.textContent = "";
        successMsg.textContent = "";

        if (!email) {
            errorMsg.textContent = "Email is required.";
            return;
        }

        if (!isValidEmail(email)) {
            errorMsg.textContent = "Please enter a valid email address.";
            return;
        }

        // Show success message
        successMsg.textContent = "You're subscribed! 🎉";
        emailInput.value = "";
    });
});