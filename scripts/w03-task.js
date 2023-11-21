/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
    function add(number1, number2) {
        return number1 + number2;
    }
    
    function addNumbers() {
        let addNumber1 = Number(document.querySelector('#add1').value);
        let addNumber2 = Number(document.querySelector('#add2').value);
        
        document.querySelector('#sum').value = add(addNumber1,addNumber2);
    }

    document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
    function subtract(number1,number2) {
        return number1 - number2;
    }

    function subtractNumbers() {
            
        let subtractNumber1 = Number(document.querySelector('#subtract1').value);
        let subtractNumber2 = Number(document.querySelector('#subtract2').value);
        
        document.querySelector('#difference').value = subtract(subtractNumber1,subtractNumber2);
    }

    document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);


/* Arrow Function - Multiply Numbers */
    function multiply(number1, number2) {
        return number1 * number2;
    }

    function multiplyNumbers() {
        
        let multiplynumber1 = Number(document.querySelector('#factor1').value);
        let multiplynumber2 = Number(document.querySelector('#factor2').value);

        document.querySelector('#product').value = multiply(multiplynumber1,multiplynumber2);
    }

    document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
    function divide(number1, number2) {
        return number1 / number2;
    }

    function divideNumbers() {
        
        let dividenumber1 = Number(document.querySelector('#dividend').value);
        let dividenumber2 = Number(document.querySelector('#divisor').value);

        document.querySelector('#quotient').value = divide(dividenumber1,dividenumber2);
    }

    document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
