/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
  const calculator = document.querySelector("#calculator");
  let display = document.querySelector(".display");
  let firstNumber = "";
  let secondNumber = "";
  let currentOperator = null;
  let isSecondNumber = false;

  calculator.addEventListener("click", (event) => {
    const target = event.target;

    console.log(target.innerText);

    // Check if the clicked element is a button
    if (target.classList[0] != "button") {
      return;
    }

    // Handle number button click
    if (target.classList[1] == "number") {
      if (!isSecondNumber) {
        firstNumber += target.innerText;
        display.innerText = firstNumber;
      } else {
        secondNumber += target.innerText;
        display.innerText = secondNumber;
      }
    }

    // Handle operator button click
    if (target.classList.contains("operator")) {
      if (firstNumber) {
        // Ensure the first number exists
        currentOperator = target.innerText;
        isSecondNumber = true;
        display.innerText = ""; // Clear display for the second number
      }
    }

    // Handle equals button click
    if (target.classList.contains("equals")) {
      if (firstNumber && secondNumber && currentOperator) {
        // Ensure both numbers and operator are set
        let result = 0;
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        switch (currentOperator) {
          case "+":
            result = num1 + num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "/":
            if (num2 == 0) {
              console.log("Error");
              break;
            }

            result = num1 / num2;
          // Add more cases for other operators as needed
        }

        display.innerText = result;
        console.log(result);
        // Reset for the next operation
        firstNumber = "";
        secondNumber = "";
        currentOperator = null;
        isSecondNumber = false;
      }
    }

    // Handle clear button click
    if (target.classList.contains("clear")) {
      firstNumber = "";
      secondNumber = "";
      currentOperator = null;
      isSecondNumber = false;
      display.innerText = "";
    }
  });
});
