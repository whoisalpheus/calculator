const add = function(a, b) {
    return a + b;
  };
  
  const subtract = function(a, b) {
      let difference = a - b;
    return difference;
  };

  const multiply = function(array) {
    const initialValue = 1;
    const sumMultiplied = array.reduce((previousValue, currentValue) => previousValue * currentValue, initialValue);
    return sumMultiplied;
  };

  const divide = function(array) {
    const initialValue = 1;
    const sumDivided = array.reduce((previousValue, currentValue) => previousValue / currentValue, initialValue);
    return sumDivided;
  }

  module.exports = {
    add,
    subtract,
    multiply,
    divide
  }