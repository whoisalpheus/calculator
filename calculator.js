const container = document.querySelector('.container');
const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.numBtns');

// Operator buttons
const equal = document.querySelector('#equalBtn');
const clear = document.querySelector('#clearBtn');
const addBtn = document.querySelector('#addBtn');
const subtractBtn = document.querySelector('#subBtn');
const multiplyBtn = document.querySelector('#multBtn');
const divideBtn = document.querySelector('#divideBtn');
const negPosBtn = document.querySelector('#negPosBtn');
const percentBtn = document.querySelector('#percentBtn');
let num1 = '';
let num2 = '';
let operator = '';

// function operate(num1, operator, num2) {
//   const num1 = display.value;
// }

// When each number button is pressed
// Display in display input

numbers.forEach(number => number.addEventListener('click', (e) => {
  display.value += e.target.textContent;
}))

// Keep selected numBtn in display until operator button is pushed
// Or keep the value in display until operBtn pressed
// If numbers are clicked
// Keep display.value in display box
// +=

// Clear button
clear.addEventListener('click', clearDisplay);

function clearDisplay() {
  display.value = '';
}

// Highlight operation function buttons (+, -, *, /)
addBtn.addEventListener('click', () => {
  addBtn.style.border = 'thick double #07562f';
})
subtractBtn.addEventListener('click', () => {
  subtractBtn.style.border = 'thick double #07562f';
})

divideBtn.addEventListener('click', () => {
  divideBtn.style.border = 'thick double #07562f';
})

multiplyBtn.addEventListener('click', () => {
  multiplyBtn.style.border = 'thick double #07562f';
})

// // Operator button functions
// // Link this to add button
// const add = function(num1, num2) {
//     return num1 + num2;
//   };
  
//   // Link this to subtract button
//   const subtract = function(num1, num2) {
//       let difference = num1 - num2;
//     return difference;
//   };

//   // Link this to multiplication button
//   const multiply = function(array) {
//     const initialValue = 1;
//     const sumMultiplied = array.reduce((previousValue, currentValue) => previousValue * currentValue, initialValue);
//     return sumMultiplied;
//   };

//   // Link this to division button
//   const divide = function(array) {
//     const initialValue = 1;
//     const sumDivided = array.reduce((previousValue, currentValue) => previousValue / currentValue, initialValue);
//     return sumDivided;
//   }

  // Equal button should put results in display
// equal function(){};





  // module.exports = {
  //   add,
  //   subtract,
  //   multiply,
  //   divide
  // }