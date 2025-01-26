const defaultResult = 0;
let currentResult = defaultResult;

//  Get input from input field
function getUserEnterNumber(){
    return parseInt(usrInput.value);
}

// Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription ); // from vendor.js

}

function add(num1, num2) {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
}

function subtract() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}

function multiply() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}

function division() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}

addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',division)