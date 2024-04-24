"use strict";

// align classes for dry code.
const number = Math.trunc(Math.random() * 10 + 1);
const container = document.querySelector(".header-container");
const selectBtn = document.querySelector(".btn-custom");
const welcoming = document.getElementById("welcoming-guests");
const selectorBox = document.querySelector(".custom-select");
const message = document.querySelector(".message");
const input = document.querySelector(".main-input-container");
let score;

// using case for selecting difficulty options
const setDifficulty = function () {
  const selectedOption = selectorBox.value;
  switch (selectedOption) {
    case "1":
      score = 5;
      message.textContent = "Easy Mode: You have 5 attempts.";
      break;
    case "2":
      score = 3;
      message.textContent = "Medium Mode: You have 3 attempts.";
      break;
    case "3":
      score = 2;
      message.textContent = "Hard Mode: You have 2 attempts.";
      break;
    default:
      console.log("Wrong Selection!!!");
  }
  // Update displayed score
  document.querySelector(".countNumber").textContent = score;
};

// Adding functions in variables
const lockElements = function () {
  welcoming.classList.add("hidden");
  selectorBox.classList.add("hidden");
  selectBtn.classList.add("hidden");
};

const unlockElements = function () {
  container.classList.remove("hidden");
  input.classList.remove("hidden");
};

const determineTheRigthNumber = function () {
  const guess = parseInt(document.querySelector(".inputNumber").value);

  const displayedMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };

  // green coloured function if win
  const winColor = function () {
    document.querySelector(".message").style.backgroundColor = "green";
    document.querySelector(".inputNumber").style.backgroundColor = "green";
    document.querySelector(".inputNumber").style.color = "white";
    document.querySelector(".inputNumber").disabled = true;
    document.querySelector(".custom-submit").disabled = true;
  };

  // red coloured function if lost
  const loseColor = function () {
    document.querySelector(".message").style.backgroundColor = "red";
    document.querySelector(".inputNumber").style.backgroundColor = "red";
    document.querySelector(".inputNumber").disabled = true;
    document.querySelector(".custom-submit").disabled = true;
  };

  // setting the rules with if statment.
  if (!guess) {
    displayedMessage("Wrong ❌, add a valid number");
  } else if (guess === number) {
    document.querySelector("#secret").textContent = number;
    displayedMessage("Correct, you are a winner ✅");
    document.querySelector(".mainHeader").textContent = "🎯🎯🎯🎯🎯🎯🎯🎯";
    winColor();
  } else if (guess !== number) {
    if (score > 1) {
      displayedMessage(guess > number ? "Too High 📈" : "Too Low 😒");

      //decreases number on click
      score--;
      document.querySelector(".countNumber").textContent = score;
    } else {
      displayedMessage("You Lost The Game !");
      document.querySelector(".countNumber").textContent = 0;
      document.querySelector("#secret").textContent = "NA";
      loseColor();
    }
  }
};

document
  .querySelector(".custom-submit")
  .addEventListener("click", determineTheRigthNumber);

selectBtn.addEventListener("click", lockElements);
selectBtn.addEventListener("click", unlockElements);

// Event listener for button click
selectBtn.addEventListener("click", function () {
  lockElements(); // Hide welcome message and selector
  unlockElements(); // Show game elements
  setDifficulty(); // Set difficulty based on selected option
});

//////  I didnt Understand!!!  /////

// const options = function (level) {
//   if (level === "easy") {
//     easyMode();
//   } else if (level === "medium") {
//     mediumMode();
//   } else if (level === "hard") {
//     hardMode();
//   } else {
//     console.log("Wrong Selection!!!");
//   }
// };
// //NOT WORKING CURRECTLY!
// selectBtn.addEventListener("click", options);

// //  three Modes in select:
// const easyMode = function () {
//   document.querySelector(".easy-option");
//   score = 5;
// };

// const mediumMode = function () {
//   document.querySelector(".medium-option");
//   score = 3;
// };

// const hardMode = function () {
//   document.querySelector(".hard-option");
//   score = 2;
// };
