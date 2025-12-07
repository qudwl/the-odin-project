const inputVar = document.getElementsByTagName('p')[0];

let numbers = [0, 0];
let operator = '';

// Adds two numbers.
const add = (x, y) => {
    return parseFloat(x) + parseFloat(y);
}

// Subtracts two numbers.
const subtract = (x, y) => {
    return parseFloat(x) - parseFloat(y);
}

// Multiplies two numbers.
const multiply = (x, y) => {
    return parseFloat(x) * parseFloat(y);
}

// Divide two numbers.
const divide = (x, y) => {
    return parseFloat(x) / parseFloat(y);
}

const modulus = (x, y) => {
    return parseFloat(x) % parseFloat(y);
}

// Does an operation based on the operator, and 2 numbers.
const operate = (operator, x, y) => {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        case '%':
            return modulus(x, y);
        default:
            console.error("Wrong operator.");
    }
}

// Function to add number to input.
const enterNum = (num) => {
    inputVar.innerText += num;
    if (operator == '') {
        numbers[0] += '' + num;
    } else {
        numbers[1] += '' + num;
    }
    console.log(numbers);
}

// Function to add operators.
const enterOp = (op) => {
    if (operator != '') {
        calculate();

    }
    operator = op;
    changeInput('');
}

// Function to change input.
const changeInput = (inputStr) => {
    inputVar.innerText = inputStr;
}

// Deletes one character from the back.
const backspace = () => {
    changeInput(inputVar.innerText.substring(0, inputVar.innerText.length - 1));
}

// Calculate the numbers.
const calculate = () => {
    if (operator == '') {
        changeInput(numbers[1]);
    } else {
        let result = operate(operator, numbers[0], numbers[1]);
        changeInput(result);
        operator = '';
        numbers[0] = result;
        numbers[1] = 0;
    }
}

const clearAll = () => {
    changeInput('');
    numbers = [0, 0];
    operator = '';
}