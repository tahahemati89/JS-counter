// Elements
const reduction = document.querySelector(".reduction");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const countElement = document.querySelector(".countElement");
let count = 0;

// Increase Button
increase.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
  countElement.style.color = "#4ade80";
});

// Reset Button
reset.addEventListener("click", () => {
  countElement.textContent = count = 0;
  countElement.style.color = "white";
});

// Reduction Button
reduction.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
  countElement.style.color = "red";
});
