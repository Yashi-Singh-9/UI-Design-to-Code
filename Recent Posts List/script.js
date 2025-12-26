document.addEventListener("DOMContentLoaded", function () {
    // Select all the category span elements
    const categories = document.querySelectorAll(".category span");
  
    // Add an event listener to each category span
    categories.forEach(function (category) {
      category.addEventListener("click", function () {
        // Remove the 'selected' class from all category spans
        categories.forEach(function (cat) {
          cat.classList.remove("selected");
        });
  
        // Add the 'selected' class to the clicked category span
        category.classList.add("selected");
      });
    });
  });
  