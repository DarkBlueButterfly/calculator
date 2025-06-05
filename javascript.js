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

const display = document.querySelector(".display");
const keypad = document.querySelector("#keypad");
const numBtn = keypad.querySelectorAll(".numKey");
let variable = '';
let decimalAdded = false;
let addOperator = null;
let firstVar = null;
let secondVar = null;

//Calculator Display
function calcDisplay(num) {
    variable += num;
    display.textContent = `${variable}`;
    storeVar(variable); //store function
}

// Reset button:
function clearAll() {
    display.textContent = ``;
    variable = ``;
    decimalAdded = false;
    addOperator = null; 
    firstVar = null;
    secondVar = null;
}
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearAll);

//Clear display
function clear() {
    display.textContent = ``;
    variable = ``;
    decimalAdded = false;
}

// Store variables:
function storeVar(num) {
    let newNum = parseFloat(parseFloat(num).toFixed(2)); //converts to number
    if (firstVar !== null && addOperator !== null) {
        secondVar = newNum;
        return secondVar;
    } else {
        firstVar = newNum;
        return firstVar;
    }
}

const operators = keypad.querySelectorAll("#operator");
operators.forEach((operate) => {
    operate.addEventListener("click", () => {
        if (!addOperator) {
            clear(); 
            addOperator = operate.className; 
        }
        return addOperator;
    })
})

//Calculate "=" 
const equal = keypad.querySelector("#equal");
equal.addEventListener("click", () => {
    calculate();
    // console.log(addOperator) //check
});
function calculate() {
    const a = parseFloat(parseFloat(firstVar).toFixed(2));
    const b = parseFloat(parseFloat(secondVar).toFixed(2));
    const op = addOperator;
    let result = 0;
        switch (op) {
            case "add":
                result = add(a, b);
                break;
            case "minus":
                result = subtract(a, b);
                break;
            case "multiply":
                result = multiply(a, b);
                break;
            case "divide":
                result = divide(a, b);
                break;
            default:
                return null;
        }
        result = parseFloat(parseFloat(result).toFixed(2));
        display.textContent = `${result}`;
        // console.log(firstVar); //check
        // console.log(secondVar); //check
}

// Keypad numbers:
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

const decimal = keypad.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (!decimalAdded) {
    calcDisplay(`.`);
    decimalAdded = true;
    }
});
