const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

const value = document.getElementById("value");
let count = 0;


increase.addEventListener("click", function () {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "rgb(34, 34, 34)";
  }
});


reset.addEventListener("click", function () {
  count = 0;
  value.textContent = count;
  if (count == 0) {
    value.style.color = "rgb(34, 34, 34)";
  }
});

decrease.addEventListener("click", function () {
  count--;

  if (count < 0) {
    value.style.color = "red";
  }

  value.textContent = count;
});
