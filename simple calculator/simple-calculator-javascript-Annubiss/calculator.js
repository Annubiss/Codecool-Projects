function isNumber(str) {
  
    if (typeof str === 'number') {
        return !isNaN(str);
    }
    const num = parseFloat(str);
    return !isNaN(num);
}

function convertNumber(str){ 
    return parseFloat(str);
}

function isValidOperator(operator) {
    if(operator == "+") return true;
    else if(operator == "-") return true;
    else if(operator == "*") return true;
    else if (operator == "/") return true;
    else return false;

}

function askForANumber(forceValidInput) {
    
    while (forceValidInput == true) {
        const userInput = prompt('Please enter a number: ');
        const inputNumber = convertStringToNumber(userInput);
        if (!isNumber(inputNumber)) {
            console.log('This didn\'t look like a number.');
            if (!forceValidInput) {
                return NaN;
            }
        } else {
            return inputNumber;
        }
    }
}


function askForAnOperator(forceValidInput) {
    const prompt = require('prompt-sync')();
    while (true) {
        const userInput = prompt('Please provide an operator (one of +, -, *, /)! ');
        if (isValidOperator(userInput)) {
            return userInput;
        } else {
            if (!forceValidInput) {
                return null;
            }
            console.log('Unknown operator.');
        }
    }

}

function calc(operator, a, b) {
    if(operator == "+") return a+b;
    else if(operator == "-") return a-b;
    else if(operator == "*") return a*b;
    else if (operator == "/"){
        if(b == 0) return "Error: Division by zero"
        else return a/b;
    }
    else return NaN;
}

function simpleCalculator() {
    while (true) {
        const a = askForANumber(false);
        if (isNaN(a)) {
            break;
        }
        const op = askForAnOperator(true);
        const b = askForANumber(true);
        const result = calculate(op, a, b);
        if (result) {
            console.log(`The result is ${calculate(op, a, b)}`);
        }
    }
}

simpleCalculator();