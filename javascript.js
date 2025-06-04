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

// let var1 = 0;
// let var2 = 0;
// let operator = "symbol";

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

//Calculator Display
function calcDisplay(num) {
    variable = num;
    return display.textContent = `${num}`;
    // console.log(`${num}`);
}

// calcDisplay("Hello World!")

function clear() {
    display.textContent = ``;
}

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);

const keypad = document.querySelector("#keypad");
// const numBtn = keypad.querySelector("button");

// numBtn.addEventListener("click", )
const one = keypad.querySelector("#one");
one.addEventListener("click", () => {calcDisplay(1)});
const two = keypad.querySelector("#two");
two.addEventListener("click", () => {calcDisplay(2)});
const three = keypad.querySelector("#three");
three.addEventListener("click", () => {calcDisplay(3)});
const four = keypad.querySelector("#four");
four.addEventListener("click", () => {calcDisplay(4)});
const five = keypad.querySelector("#five");
five.addEventListener("click", () => {calcDisplay(5)});
const six = keypad.querySelector("#six");
six.addEventListener("click", () => {calcDisplay(6)});
const seven = keypad.querySelector("#seven");
seven.addEventListener("click", () => {calcDisplay(7)});
const eight = keypad.querySelector("#eight");
eight.addEventListener("click", () => {calcDisplay(8)});
const nine = keypad.querySelector("#nine");
nine.addEventListener("click", () => {calcDisplay(9)});
const zero = keypad.querySelector("#zero");
zero.addEventListener("click", () => {calcDisplay(0)});

function storeNum1() {
    let a = var1;
    
    return operate(op, a, b)
}

const operator = keypad.querySelectorAll("#operator")
function operate() {
    if (operator == "/") {

    }

}

