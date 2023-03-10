// Function
// -fundamental building block in the program
// -subprogram can be used multiple times
// -performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body...return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("박민영");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showmessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showmessage("Hi");

// 4.Rest parameters (added in ES6)
function printAll(...args) {
  // for (let i = 0; i < args.length; i++) {
  //   console.log(args[i]);
  // }
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); //error 나중에 closer에서 배움.
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}
