document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");
  
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        // Remove "selected" class from all categories
        categories.forEach((cat) => {
          cat.classList.remove("selected");
          cat.style.backgroundColor = cat
            .getAttribute("style")
            .split(";")[0]
            .split(":")[1]
            .trim(); // Reset background
          cat.style.borderColor = "transparent"; // Reset border color
        });
  
        // Add "selected" class to clicked category
        category.classList.add("selected");
        const baseColor = category.getAttribute("data-color");
        category.style.backgroundColor = lightenColor(baseColor, 40);
        category.style.borderColor = baseColor;
      });
    });
  
    // Helper function to lighten colors
    function lightenColor(hex, percent) {
      const num = parseInt(hex.slice(1), 16);
      const r = Math.min(255, (num >> 16) + percent);
      const g = Math.min(255, ((num >> 8) & 0x00ff) + percent);
      const b = Math.min(255, (num & 0x0000ff) + percent);
      return `rgb(${r},${g},${b})`;
    }
  });
  