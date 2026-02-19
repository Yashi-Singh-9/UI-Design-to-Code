// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Grab the search input and tags section
    const searchInput = document.querySelector(".input input[type='text']");
    const tags = document.querySelectorAll(".tags span");
  
    // Search functionality
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
  
      // Example: Filter recipes based on the query
      console.log(`Search query: ${query}`);
      // Add your filtering logic here, e.g., updating displayed recipes
    });
  
    // Clickable tags functionality
    tags.forEach((tag) => {
      tag.addEventListener("click", () => {
        // Remove active class from all tags
        tags.forEach((t) => t.classList.remove("active"));
  
        // Add active class to the clicked tag
        tag.classList.add("active");
  
        // Example: Filter recipes based on the selected tag
        const selectedTag = tag.textContent.trim();
        console.log(`Selected tag: ${selectedTag}`);
        // Add your filtering logic here, e.g., updating displayed recipes
      });
    });
  });
  