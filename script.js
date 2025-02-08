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

function operate(op,numOne,numTwo){
    switch(op){
        case '+':
            console.log(add(numOne,numTwo))
        case '-':
            console.log(sub(numOne,numTwo))
        case '*':
            console.log(mul(numOne,numTwo))
        case '/':
            console.log(div(numOne,numTwo))
    }
}

const display = document.querySelector('#display')

const numbers = document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click',() => {
        display.textContent = number.textContent
    })
})

let a = 0
let b = 0
let op = '+'