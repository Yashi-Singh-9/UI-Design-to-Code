document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const errorSpan = document.querySelector('.error');
    const subscribeButton = document.querySelector('button');
    const infoSection = document.querySelector('.info');

    // Save the original HTML of the form
    const originalContent = infoSection.innerHTML;

    subscribeButton.addEventListener('click', () => {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            showError('Please enter your email address.');
        } else if (!emailPattern.test(emailValue)) {
            showError('Please enter a valid email address.');
        } else {
            clearError();
            showSuccess();
        }
    });

    function showError(message) {
        errorSpan.textContent = message;
    }

    function clearError() {
        errorSpan.textContent = '';
    }

    function showSuccess() {
        infoSection.innerHTML = `
            <h3 class="fw-bold mb-2">Thank you for subscribing! 🎉</h3>
            <p class="mb-4">You have successfully joined our newsletter. Stay tuned for updates!</p>
        `;

        // After 2 seconds, reset the form
        setTimeout(() => {
            infoSection.innerHTML = originalContent;
            reattachListeners(); // Important: reattach event listeners because innerHTML removes them
        }, 2000);
    }

    function reattachListeners() {
        const newSubscribeButton = document.querySelector('button');
        const newEmailInput = document.getElementById('email');
        const newErrorSpan = document.querySelector('.error');

        newSubscribeButton.addEventListener('click', () => {
            const emailValue = newEmailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailValue === '') {
                newErrorSpan.textContent = 'Please enter your email address.';
            } else if (!emailPattern.test(emailValue)) {
                newErrorSpan.textContent = 'Please enter a valid email address.';
            } else {
                newErrorSpan.textContent = '';
                showSuccess();
            }
        });
    }
});
