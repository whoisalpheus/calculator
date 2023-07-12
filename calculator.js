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

// When each number button is pressed
// Display in display input

numbers.forEach(number => number.addEventListener('click', (e) => {
  display.value += e.target.textContent;
}))

// Keep selected numBtn in display until operator button is pushed
// Or keep the value in display until operBtn pressed
// If numbers are clicked
// Keep display.value in display box

// numbers.forEach(number => number.addEventListener('click', updateDisplay));

// function updateDisplay(event) {
//   if(validValue(event.target.value)) {
//     display.setAttribute('value', event.target.value);
//   }
// }

// function validValue(value) {
//   for(let i = 0; i < validBtnPress.length; i++) {
//     if(value == validBtnPress[i]) {
//       return true;
//     }
//   } return false;
// }

// Operator button functions
// Link this to add button
// const add = function(a, b) {
//     return a + b;
//   };
  
//   // Link this to subtract button
//   const subtract = function(a, b) {
//       let difference = a - b;
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