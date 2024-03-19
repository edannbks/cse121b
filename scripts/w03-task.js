/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2) {
    return number1 + number2;
}
function addNumbers() {
    let number1 = parseFloat(document.getElementById("add1").value);
    let number2 = parseFloat(document.getElementById("add2").value);
    let sum = add(number1,number2);
    document.getElementById("sum").value = sum;
}

document.getElementById("addNumbers").addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1,number2) {
    return number1 - number2;
}
function subtractNumbers() {
    let number1 = parseFloat(document.getElementById("subtract1").value);
    let number2 = parseFloat(document.getElementById("subtract2").value);
    let difference = subtract(number1,number2);
    document.getElementById("difference").value = difference;
}

document.getElementById("subtractNumbers").addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1 * number2;

function multiplyNumbers() {
    let number1 = parseFloat(document.getElementById("factor1").value);
    let number2 = parseFloat(document.getElementById("factor2").value);
    let product = multiply(number1,number2);
    document.getElementById("product").value = product;
}

document.getElementById("multiplyNumbers").addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1,number2) => number1 / number2;

function divideNumbers() {
    let number1 = parseFloat(document.getElementById("dividend").value);
    let number2 = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(number1,number2);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener('click',divideNumbers);

/* Decision Structure */
const checkMember = function (subtotal,member) {
    let theTotal;
    if ( member === true) {
        theTotal = subtotal * .8;
    }
    else {
        theTotal = subtotal;
    }
    return theTotal;
}
function getTotal() {
    let subtotal = parseInt(document.getElementById("subtotal").value);
    let member = document.getElementById("member").checked;
    let newTotal = checkMember(subtotal,member);
    document.getElementById("total").textContent = `$${newTotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener('click',getTotal);


/* ARRAY METHODS - Functional Programming */
let anArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").innerHTML = anArray;
/* Output Odds Only Array */
document.getElementById("odds").innerHTML = anArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = anArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerHTML = anArray.reduce((sum,number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = anArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let newArray = anArray.map(number => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = newArray.reduce((sum,number) => sum + number);