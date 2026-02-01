document.querySelector("button").addEventListener("click", function () {
    const button = this;
    const input = document.querySelector("input");
  
    // Select the text inside the input field
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text to clipboard
    document.execCommand("copy");
  
    // Change button text to "Copied"
    button.textContent = "Copied";
  
    // After 1 seconds, change the text back to "Copy link"
    setTimeout(function () {
      button.textContent = "Copy link";
    }, 1000);
  });
  