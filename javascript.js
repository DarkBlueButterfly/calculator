// basic math functions:
// add:
function add(a, b) {
    return a + b;
}

// subtract
function subtract(a, b) {
    return a - b;
}

// multiply
function multiply(a, b) {
    return a * b;
}

// divide
function divide(a, b) {
    return a / b;
}

let var1 = 0;
let var2 = 0;
let operator = "symbol";

function operate(operator, var1, var2) {
    if(operator === `+` ) {
        return add(var1, var2);
    } else if (operator === `-`) {
        return subtract(var1, var2);
    } else if (operator === `*`) {
        return multiply(var1, var2);
    } else if (operator === `/`) {
        return divide(var1, var2);
    }
}

const display = document.querySelector(".display");


function calcDisplay() {
    display.textContent = `Hello World!`;
}

calcDisplay()

function clear() {
    display.textContent = ``;
}

const clearbtn = document.querySelector(".clear");
clearbtn.addEventListener("click", clear);

