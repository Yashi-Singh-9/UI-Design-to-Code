document.addEventListener("DOMContentLoaded", () => {
    const groupDivs = document.querySelectorAll(".groups > div");
  
    groupDivs.forEach((div) => {
      div.addEventListener("click", () => {
        // Remove 'selected' class from all divs and uncheck their radio buttons
        groupDivs.forEach((item) => {
          item.classList.remove("selected");
          const radioButton = item.querySelector("input[type='radio']");
          if (radioButton) {
            radioButton.checked = false;
          }
        });
  
        // Add 'selected' class to the clicked div
        div.classList.add("selected");
  
        // Check the radio button inside the clicked div
        const radioButton = div.querySelector("input[type='radio']");
        if (radioButton) {
          radioButton.checked = true;
        }
      });
    });
  });
  