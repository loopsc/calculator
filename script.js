const display = document.querySelector("#display");
const decimalButton = document.getElementById("decimal");
let numOne = "";
let numTwo = "";
let operator = "";
let numOfCalculations = 1;

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return Math.round(a * b * 100) / 100;
}

function div(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function operate(op, numOne, numTwo) {
    switch (op) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return sub(numOne, numTwo);
        case "*":
            return mul(numOne, numTwo);
        case "/":
            if (numOne == 0 && numTwo == 0) {
                return "lol";
            }
            return div(numOne, numTwo);
    }
}

function clear(clearDisplay = false) {
    numOne = "";
    numTwo = "";
    operator = "";
    numOfCalculations = 0;
    if (clearDisplay) {
        display.textContent = "0";
    }
}

const numberNodes = document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", () => {
        // If numOne
        if (operator == "") {
            if (numOne.length < 9) {
                
                numOne += number.textContent;
                console.log("numOne", typeof numOne, numOne);

                display.textContent = numOne;
                if(number.textContent == '.'){
                    if (numOne.includes(".")) {
                        decimalButton.setAttribute("disabled", "disabled");
                    }
                }
            }
        } else {
            if (numOne == "") {
                numOne = "0";
            }
            if (numTwo.length < 9) {
                numTwo += number.textContent;
                console.log("numTwo", typeof numTwo, numTwo);

                display.textContent = numTwo;
                if(number.textContent == '.'){
                    if (numTwo.includes(".")) {
                        decimalButton.setAttribute("disabled", "disabled");
                    }
                }
            }
        }
    });
});

const operatorNodes = document.querySelectorAll(".operator").forEach((op) => {
    op.addEventListener("click", () => {
        decimalButton.removeAttribute("disabled");

        // If the user clicks any of the mathematical operators
        if (op.textContent != "=" && op.textContent != "C") {
            if (numTwo == "") {
                operator = op.textContent;
                console.log("numOfCalculations: " + numOfCalculations);

                // If this is the first operation
                // Save the operator and show on the display
                if (numOfCalculations == 1) {
                    console.log("operator", typeof operator, operator);
                    display.textContent = operator;
                    // Chain operations
                    // Not first operator so calculate first 2 numbers first
                } else {
                    numOne = operate(operator, +numOne, +numTwo);
                    operator = op.textContent;
                    display.textContent = operator;
                    numTwo = "";

                    numOfCalculations += 1;
                }
            }

            // If the user clicks '='
        } else if (op.textContent == "=") {
            // Defaults the first number to 0 if nothing is selected
            if (numOne == "") {
                numOne = "0";
                display.textContent = "0";
                clear((clearDisplay = false));

                // If numOne is selected but not operator or numTwo
            } else if (operator == "" || numTwo == "") {
                display.textContent = numOne;
                numTwo = "";
            } else {
                // No issues. Perform operation
                console.log(`${numOne} ${operator} ${numTwo}`);
                result = operate(operator, +numOne, +numTwo);
                display.textContent = result;

                numOne = result;
                numTwo = "";
                operator = "";
                numOfCalculations = 0;
            }
            // If the user clicks 'C'
        } else {
            clear((clearDisplay = true));
        }
    });
});
