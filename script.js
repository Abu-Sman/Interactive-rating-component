"use strict";

const rating = document.querySelector(".rating-state");
const thankyou = document.querySelector(".thankyou-state");
const ratingBox = document.querySelector(".rating-box");
const numberBoxes = document.querySelectorAll(".number-box");
const btn = document.querySelector(".btn");

ratingBox.addEventListener("click", function (e) {
  const clicked = e.target.closest(".number-box");
  if (!clicked) return;

  // Remove previously selected element.
  numberBoxes.forEach((numberBox) => numberBox.classList.remove("selected"));

  // Add most recent selected element
  clicked.classList.add("selected");

  // Take note of the selected rating
  document.querySelector(
    ".selected-num"
  ).textContent = `${clicked.dataset.num}`;
  console.log(clicked.dataset.num);
});

btn.addEventListener("click", function () {
  rating.classList.add("hidden");
  thankyou.classList.remove("hidden");
});
