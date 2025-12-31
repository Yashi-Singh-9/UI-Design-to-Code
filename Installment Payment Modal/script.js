const closeButton = document.querySelector(".fa-xmark");
const modal = document.querySelector(".modal");
const paymentPlanSelect = document.getElementById("payment-plan");
const interestRateEl = document.getElementById("interest-rate");
const costEl = document.getElementById("cost");
const totalEl = document.getElementById("total");

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

function openModal() {
  modal.style.display = "block";
}

paymentPlanSelect.addEventListener("change", function () {
  const selectedOption =
    paymentPlanSelect.options[paymentPlanSelect.selectedIndex];
  const rate = selectedOption.getAttribute("data-rate");
  const cost = selectedOption.getAttribute("data-cost");
  const total = selectedOption.getAttribute("data-total");

  interestRateEl.textContent = `${rate}%`;
  costEl.textContent = `${cost}.-`;
  totalEl.textContent = `${total}.-`;
});
