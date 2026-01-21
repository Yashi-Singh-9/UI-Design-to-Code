document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const messageSpan = document.querySelector(".error");
    const subscribeBtn = document.querySelector("button");

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    subscribeBtn.addEventListener("click", function () {
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
    });
});