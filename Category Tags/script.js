document.addEventListener("DOMContentLoaded", function () {
    const thumbsUp = document.querySelector(".rate span:first-child");
    const thumbsDown = document.querySelector(".rate span:last-child");
    const articleSection = document.querySelector(".article");
    const tagsSection = document.querySelector(".tags");
    const tags = document.querySelectorAll(".tags .tag span");
  
    // Show article section when a tag is clicked
    tags.forEach((tag) => {
      tag.addEventListener("click", function () {
        tagsSection.classList.add("d-none");
        articleSection.classList.remove("d-none");
      });
    });
  
    // Handle thumbs-up click
    thumbsUp.addEventListener("click", function () {
      // Ensure thumbs-up is selected and thumbs-down is not
      thumbsUp.classList.add("selected");
      thumbsDown.classList.remove("selected");
  
      // Switch back to the tags section
      articleSection.classList.add("d-none");
      tagsSection.classList.remove("d-none");
    });
  
    // Handle thumbs-down click
    thumbsDown.addEventListener("click", function () {
      // Ensure thumbs-down is selected and thumbs-up is not
      thumbsDown.classList.add("selected");
      thumbsUp.classList.remove("selected");
  
      // Switch back to the tags section
      articleSection.classList.add("d-none");
      tagsSection.classList.remove("d-none");
    });
  });
  