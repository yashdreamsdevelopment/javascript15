const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f15025 -- eg. of hex color

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  let count = 6;
  while (count > 0) {
    let randomNumber = Math.floor(Math.random() * hex.length);

    hexColor += hex[randomNumber];

    count--;
  }

  document.body.style.backgroundColor = hexColor;

  color.textContent = hexColor;
});
