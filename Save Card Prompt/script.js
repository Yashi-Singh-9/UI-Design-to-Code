// Get elements
const saveButton = document.querySelector('.save-info button');
const inputField = document.querySelector('.save-info input');
const errorField = document.querySelector('.error');

// Save Card button event
saveButton.addEventListener('click', function() {
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        errorField.innerHTML = "Please enter a name to save this card.";
        errorField.classList.remove('text-success');
        errorField.classList.add('text-danger');
    } else {
        errorField.innerHTML = `Card saved under the name: <b>${inputValue}</b>`;
        errorField.classList.remove('text-danger');
        errorField.classList.add('text-success');
        inputField.value = ""; // Clear the input field after saving
    }

    setTimeout(() => {
        errorField.innerHTML = "";
    }, 4000); 
});
