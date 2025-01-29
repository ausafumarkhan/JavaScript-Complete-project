const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//  Get input from input field
function getUserEnterNumber(){
    return parseInt(usrInput.value);
}

// Generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription ); // from vendor.js

}

// Write to log 
function writeToLog (
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation: operationIdentifier,
        preResult: prevResult,
        enteredNumber: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
};

function add(num1, num2) {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult)
}

function subtract() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult)
}

function multiply() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult)
}

function division() {
    const enteredNumber = getUserEnterNumber();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult)
}

addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',subtract)
multiplyBtn.addEventListener('click',multiply)
divideBtn.addEventListener('click',division)