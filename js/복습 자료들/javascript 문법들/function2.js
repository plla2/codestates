// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();

function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous

// const simplePrint = function () {
//   console.log("simplePrint !");
// };
// const add = function(a , b) {
// return a + b;
// };

// Arrow function 을 이용하면 위의 함수를 아래처럼 간단하게 만들 수 있음.
const simplePrint = () => console.log("simplePrint !");
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();

// Quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;

    default:
      throw Error("Unknown command");
  }
}
console.log(calculate("add", 2, 3));
