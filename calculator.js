const container = document.querySelector('.container');
const display = document.querySelector('#displayBox');
const numbers = document.querySelectorAll('.numBtns');
const operators = document.querySelectorAll('.operBtns');

// Operator buttons
const equal = document.querySelector('#equalBtn');
const clear = document.querySelector('#clearBtn');
// const addBtn = document.querySelector('#addBtn');
// const subtractBtn = document.querySelector('#subBtn');
// const multiplyBtn = document.querySelector('#multBtn');
// const divideBtn = document.querySelector('#divideBtn');
const negPosBtn = document.querySelector('#negPosBtn');
const percentBtn = document.querySelector('#percentBtn');

let num1 = '';
let num2 = '';
let operator = '';

// When each number button is pressed
// Display in display input

const numClick = numbers.forEach(number => number.addEventListener('click', (e) => {
  display.textContent += e.target.textContent;
}))
// +=

const opClick = operators.forEach(operator => operator.addEventListener('click', (e) => {
  display.textContent += e.target.textContent;
}))

// Clear button
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
  display.textContent = '';
}

// Operator button functions
// Link this to add button
function add(num1, num2) {
    return num1 + num2;
  };
  
  // Link this to subtract button
  function subtract(num1, num2) {
    return num1 - num2;
  };

  // Link this to multiplication button
  function multiply(num1, num2) {
    return num1 * num2;
  };

  // Link this to division button
  function divide(num1, num2) {
    return num1 / num2;
  }



// // If addBtn is clicked:
// addBtn.addEventListener('click', add);
// // If subBtn is clicked:
// subBtn.addEventListener('click', subtract);
// // If multiplyBtn is clicked:
// multiplyBtn.addEventListener('click', multiply);
// // If divideBtn is clicked:
// divideBtn.addEventListener('click', divide);


// Have to link the button clicks with the operate function somehow


  // Equal button should put results in display
// equal function(){};
























// Highlight operation function buttons (+, -, *, /)
// addBtn.addEventListener('click', () => {
//   addBtn.style.border = 'thick double #07562f';
// })
// subtractBtn.addEventListener('click', () => {
//   subtractBtn.style.border = 'thick double #07562f';
// })

// divideBtn.addEventListener('click', () => {
//   divideBtn.style.border = 'thick double #07562f';
// })

// multiplyBtn.addEventListener('click', () => {
//   multiplyBtn.style.border = 'thick double #07562f';
// })


  // module.exports = {
  //   add,
  //   subtract,
  //   multiply,
  //   divide
  // }