function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
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
            return div(numOne, numTwo);
    }
}

const display = document.querySelector("#display");
let numOne = "";
let numTwo = "";
let operator = "";

const numberNodes = document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", () => {
        if (operator == "") {
            numOne += number.textContent;
            console.log("numOne", typeof numOne, numOne);

            display.textContent = numOne;
        } else {
            numTwo += number.textContent;
            console.log("numTwo", typeof numTwo, numTwo);

            display.textContent = numTwo;
        }
    });
});

const operatorNodes = document.querySelectorAll(".operator").forEach((op) => {
    op.addEventListener("click", () => {
        if (op.textContent != "=" && op.textContent != 'C') {
            operator = op.textContent;
            console.log("operator", typeof operator, operator);

            display.textContent = operator;
        } else if(op.textContent == '=') {
            // perform operation
            console.log(`${numOne} ${operator} ${numTwo}`);
            display.textContent = operate(operator, +numOne, +numTwo);
        }
        else {
            numOne = ''
            numTwo = ''
            operator = ''
            display.textContent = 0
        }
    });
});
