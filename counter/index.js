const decreaseEl = document.querySelector(".decrease");
const resetEl = document.querySelector(".reset");
const increaseEl = document.querySelector(".increase");
const valueEl = document.querySelector("#value");

let currentCounterValue = parseInt(valueEl.textContent);
decreaseEl.addEventListener("click", function () {
  valueEl.textContent = --currentCounterValue;

  addMarking();
});

increaseEl.addEventListener("click", function () {
  valueEl.textContent = ++currentCounterValue;
  addMarking();
});

resetEl.addEventListener("click", function () {
  valueEl.textContent = 0;
  addMarking();
});

function addMarking() {
  if (currentCounterValue < 0) {
    valueEl.classList.add("less-than-0");
    valueEl.classList.remove("greater-than-0");
  } else if (currentCounterValue > 0) {
    valueEl.classList.add("greater-than-0");
    valueEl.classList.remove("less-than-0");
  } else {
    valueEl.classList.remove("less-than-0");
    valueEl.classList.remove("greater-than-0");
  }
}
