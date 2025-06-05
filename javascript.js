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

//Rewriting operate function: 
// function operate(operator, var1, var2) {
//     if(operator === `+` ) {
//         return add(var1, var2);
//     } else if (operator === `-`) {
//         return subtract(var1, var2);
//     } else if (operator === `*`) {
//         return multiply(var1, var2);
//     } else if (operator === `/`) {
//         return divide(var1, var2);
//     }
// }

const display = document.querySelector(".display");

const keypad = document.querySelector("#keypad");
const numBtn = keypad.querySelectorAll(".numKey");
let variable = '';
let decimalAdded = false;
let addOperator = null;
let firstVar = null;
let secondVar = null;

// numBtn.forEach(button => {
//     button.addEventListener("click", () => {
//         variable += button.textContent;
//         display.textContent = variable;
//     })
// })


//Calculator Display
function calcDisplay(num) {
    variable += num;
    display.textContent = `${variable}`;
    // return variable; //output... to store function?
    storeVar(variable); //store function
    // console.log(`${num}`);
}
// variable = calcDisplay()
// console.log(variable)

// Clear button:
function clearAll() {
    display.textContent = ``;
    variable = ``;
    decimalAdded = false;
    addOperator = null; //add to button click instead...? nvm
    firstVar = null;
    secondVar = null;
}
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearAll);

//to not clear everything
function clear() {
    display.textContent = ``;
    variable = ``;
    decimalAdded = false;
    // addOperator = null; //add to button click instead...? nvm
    // firstVar = null;
    // secondVar = null;
}

// Store numbers: is this needed? since there are already variables declared!
// yes it was needed!
function storeVar(num) {
    // let var1 = 0;
    // let var2 = 0;
    let newNum = parseFloat(parseFloat(num).toFixed(2)); //changed to numbers
    // if (firstVar === null && addOperator === null) {
    //     // firstVar = parseFloat(parseFloat(variable).toFixed(2));
    //     firstVar = newNum;
    //     // firstVar = false;
    //     // return var1; 
    //     return firstVar;  //needed?
    // } else if(firstVar !== null && addOperator !== null) {
    //     // calculate() //
    //     secondVar = newNum;
    //     // console.log(var2); //check
    //     return secondVar;
    //     // storeVar2(newNum); //might not be needed
    // }
    //try this! it works!!
    if (firstVar !== null && addOperator !== null) {
        secondVar = newNum;
        return secondVar;
    } else {
        firstVar = newNum;
        return firstVar;
    }
    // return var1;
    // calculate(var1, var2); 
}

// function storeVar2(num) {
//     let newNum = parseFloat(parseFloat(num).toFixed(2));
//     return newNum;
// }

//Operator function: to store the operators?
const operators = keypad.querySelectorAll("#operator");
// function operator() {
    operators.forEach((operate) => {
        operate.addEventListener("click", () => {
            // let button = operate.className;
            // addOperator = operate.className; //changed this oops should be in the if
            // clear the display after the click
            // display.textContent = ``; 
            // clear();
            if (!addOperator) {
                clear(); //Done - might need to change this so it doesn't reset everything...
                addOperator = operate.className; //should be here!?
            }
            return addOperator;
            // console.log(button); //can change your operator?
            // calculate(); //should be activated when "=" is pressed
        })
    })
    // console.log(button);
    // if (button === `plus`) { //wait til calculate?

    // }
// } //end function
//not right...
// function operator(variable) {
//     // let variable = calcDisplay()
//     let parsed = parseFloat(parseFloat(variable).toFixed(2)); //number not string!
//     console.log(parsed); //check 
// }


//Calculate "=" 
const equal = keypad.querySelector("#equal");
equal.addEventListener("click", () => {
    calculate();
    console.log(addOperator) //check
});
function calculate() {
    // const a = storeVar();
    // const b = storeVar();
    const a = parseFloat(parseFloat(firstVar).toFixed(2));     //copied
    const b = parseFloat(parseFloat(secondVar).toFixed(2));    //copied
    const op = addOperator;
    // const op = operate(); //need to fix
    let result = 0;
    // if () {
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
        console.log(firstVar); //check
        console.log(secondVar); //check
//     }
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

// const operator = keypad.querySelector("#operator");
// operator.addEventListener("click", () => {operate()});

// const divide = keypad.querySelector(".divide");
// divide.addEventListener("click", () => {calcDisplay(`/`)});
// const multiply = keypad.querySelector(".multiply");
// multiply.addEventListener("click", () => {calcDisplay(`*`)});
// const add = keypad.querySelector(".add");
// add.addEventListener("click", () => {calcDisplay(`+`)});
// const minus = keypad.querySelector("#minus");
// minus.addEventListener("click", () => {calcDisplay(`-`)});
// const equal = keypad.querySelector("#equal");
// equal.addEventListener("click", () => {calcDisplay(`=`)});


// function storeNum1() {
//     let a = var1;
    
//     return operate(op, a, b)
// }

// // const operator = keypad.querySelectorAll("#operator")
// function operate() {
//     if (operator == "/") {

//     }

// }

