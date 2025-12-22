// Select all the spans and the link
document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll("main span");
    const link = document.querySelector("main a");
  
    // Add click event to each span
    spans.forEach((span) => {
      span.addEventListener("click", () => {
        // Remove "selected" class from all spans
        spans.forEach((s) => s.classList.remove("selected"));
  
        // Add "selected" class to the clicked span
        span.classList.add("selected");
      });
    });
  
    // Add click event to the link (optional functionality)
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior
      alert("Navigating to all products..."); // Example action
      // You can add real navigation here
      // window.location.href = "your-link-url";
    });
  });
  