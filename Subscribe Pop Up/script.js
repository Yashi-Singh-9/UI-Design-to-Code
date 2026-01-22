document.addEventListener("DOMContentLoaded", function () {
    const closeIcon = document.querySelector(".fa-xmark");
    const mainPopup = document.querySelector("main");
    const emailInput = document.getElementById("email");
    const messageSpan = document.querySelector(".error");
    const submitButton = document.querySelector("button");

    // Close functionality
    closeIcon.addEventListener("click", function () {
        mainPopup.style.display = "none";
    });

    // Email validation
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    submitButton.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (!email) {
            messageSpan.innerHTML = "Email is required.";
            messageSpan.classList.remove("text-success");
            messageSpan.classList.add("text-danger");
            return;
        }

        if (!isValidEmail(email)) {
            messageSpan.innerHTML = "Please enter a valid email address.";
            messageSpan.classList.remove("text-success");
            messageSpan.classList.add("text-danger");
            return;
        }

        messageSpan.innerHTML = "Subscribed!";
        messageSpan.classList.remove("text-danger");
        messageSpan.classList.add("text-success");
        emailInput.value = "";
    });
});