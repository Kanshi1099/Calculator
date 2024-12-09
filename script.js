const display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Function to append operators to the display
function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if (!isNaN(lastChar)) {
        display.value += operator;
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = '0';
}

// Function to delete the last character
function deleteLast() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
        display.value = result === Infinity || isNaN(result) ? 'Error' : result;
    } catch (error) {
        display.value = 'Error';
    }
}
