const add = function(a, b) {
  return a + b ;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => {
    return total + number;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((result, number) => {
    return result * number;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let result = 1
	for(let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
