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
            if (numOne == 0 && numTwo == 0){
                return 'lol'
            }
            return div(numOne, numTwo);
    }
}

const display = document.querySelector("#display");
let numOne = "";
let numTwo = "";
let operator = "";
let numOfCalculations = 0

const numberNodes = document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", () => {
        if (operator == "") {
            numOne += number.textContent;
            console.log("numOne", typeof numOne, numOne);

            display.textContent = numOne;
        } else {
            if (numOne == ''){
                numOne = '0'
            }
            numTwo += number.textContent;
            console.log("numTwo", typeof numTwo, numTwo);

            display.textContent = numTwo;
        }
    });
});

const operatorNodes = document.querySelectorAll(".operator").forEach((op) => {
    op.addEventListener("click", () => {
        
        // If the user clicks any of the mathematical operators
        if (op.textContent != "=" && op.textContent != "C") {
            numOfCalculations += 1
            // If this is the first operation
            // Save the operator and display on the display
            if (numOfCalculations == 1) {
                operator = op.textContent;
                console.log("operator", typeof operator, operator);
                display.textContent = operator;
            }
            else {
                numOne = operate(operator,+numOne,+numTwo)
                display.textContent = numOne
                numTwo = ''
                operator = op.textContent
            }
            
            
        // If the user clicks '='
        } else if (op.textContent == "=") {
            // Defaults the first number to 0 if nothing is selected
            if (numOne == "") {
                display.textContent = "0";
            // Defaults the number to numOne if no operator or numTwo is selected
            } else if (operator == "" || numTwo == "") {
                display.textContent = numOne;
            } else {
                // No issues. Perform operation
                console.log(`${numOne} ${operator} ${numTwo}`);
                display.textContent = operate(operator, +numOne, +numTwo);
            }
        // If the user clicks 'C'
        } else {
            numOne = "";
            numTwo = "";
            operator = "";
            display.textContent = 0;
        }
    });
});
