document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list span");
  
    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        listItems.forEach((el) => el.classList.remove("selected"));
        item.classList.add("selected");
      });
    });
  });
  