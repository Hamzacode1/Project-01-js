"use strict";

// we add random math number from 1 to 10.
const number = Math.trunc(Math.random() * 10 + 1);

// counting the attempts (times left)
let score = 5;

// created Function in variable for dry clean code.
const displayedMessage = function (message) {
  document.querySelector(".message").textContent = message; //message
};

// we added the function Declaration for outputing the Number
function determineTheRigthNumber() {
  const guess = parseInt(document.querySelector(".inputNumber").value);
  // console.log(guess, typeof guess);  we can see their type.

  // we use if else statement to configure the numbers.
  if (!guess) {
    displayedMessage("Wrong ❌, add a valid number");
    // '10' == 10 true
    //  if number is TRUE
  } else if (guess === number) {
    document.querySelector("#secret").textContent = number;
    displayedMessage("Correct ✅");
    document.querySelector(".mainHeader").textContent = "🎯🎯🎯🎯🎯🎯🎯🎯";
    document.querySelector("p").style.backgroundColor = "green";
    document.querySelector(".inputNumber").style.backgroundColor = "green";
    document.querySelector(".inputNumber").style.color = "green";
  } else if (guess !== number) {
    if (score > 0) {
      displayedMessage(guess > number ? "Too High 📈" : "Too Low 😒");

      // we created below score-- to decrease on every click
      score--;
      document.querySelector(".countNumber").textContent = score;
    } else {
      displayedMessage("You Lost The Game ⛔");
      document.querySelector(".countNumber").textContent = 0;
      document.querySelector("#secret").textContent = "NA";
      document.querySelector(".inputNumber").style.backgroundColor = "red";
      // disableFormInputs - disable submit btn and input using disabled type

      determineTheRigthNumber();
    }
  }
}

// Adding EventListner for button on "click".
document
  .querySelector(".button")
  .addEventListener("click", determineTheRigthNumber);

// Why the app is continuing if when entering score ??
