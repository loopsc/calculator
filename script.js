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
            console.log(add(numOne, numTwo));
        case "-":
            console.log(sub(numOne, numTwo));
        case "*":
            console.log(mul(numOne, numTwo));
        case "/":
            console.log(div(numOne, numTwo));
    }
}

const display = document.querySelector("#display");
let numOne = "";
let numTwo = "";
let operator = "";

const numberNodes = document.querySelectorAll(".number").forEach((number) => {
    number.addEventListener("click", () => {
        numOne += number.textContent;
        numOne = +numOne;
        console.log(typeof numOne, numOne);

        display.textContent = numOne;
    });
});

const operatorNodes = document.querySelectorAll(".operator").forEach((op) => {
    op.addEventListener("click", () => {
        if (op.textContent != "=") {
            operator = op.textContent;
            console.log(typeof operator, operator);

            display.textContent = op.textContent;
        }

        // perform operation
        console.log("= clicked");
    });
});

let a = 0;
let b = 0;
let op = "+";
