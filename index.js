// Variables:
const counter = document.getElementById("count-el");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
// incrementBtn.addEventListener("click", () => console.log("clicked"));
const savingElement = document.getElementById("save-el");

// ---- Logic -------
let count = 0;

// --> Update Counter <--
function updateCounterElement() {
  counter.innerText = count;
}

incrementBtn.addEventListener("click", () => {
  count += 1;
  updateCounterElement();
});

decrementBtn.addEventListener("click", () => {
  count = count - 1;
  updateCounterElement();
});

// Save
saveBtn.addEventListener("click", () => {
  //   savingElement.innerText += count + " - "; // Doesn't show the spaces between the numbers.
  savingElement.textContent += count + " - ";
  counter.textContent = 0;
  count = 0;
});

// Reset
function reset() {
  count = 0;
  counter.innerText = count;
  updateCounterElement();
  savingElement.textContent = "Previous entires:";
}

resetBtn.addEventListener("click", reset);
