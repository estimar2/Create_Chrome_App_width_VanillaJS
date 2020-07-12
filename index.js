const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

// console.log(greetNicolas);

let num1 = 12;
let num2 = 3;

const calculatorResult = {
  pluse: calculator.plus(num1, num2),
  minus: calculator.minus(num1, num2),
  multiply: calculator.multiply(num1, num2),
  divide: calculator.divide(num1, num2),
  powerof: calculator.powerof(num1, num2),
};

console.log(` pluse : ${calculatorResult.pluse}`);
console.log(` minus : ${calculatorResult.minus}`);
console.log(` multiply : ${calculatorResult.multiply}`);
console.log(` divide : ${calculatorResult.divide}`);
console.log(` powerof : ${calculatorResult.powerof}`);
