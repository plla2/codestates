// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// ``을 사용하여 문자열을 정의한다.

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // preIncrement에선 ++counter; 이므로 counter에 먼저 +1을 해주고 preIncrement로 할당한다.
// counter = counter +1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //postIncrement에선  counter++; 이므로 3이 들어간 counter를 먼저 postIncrement로 받고 counter에 +1을 해준다.
// postIncrement = counter;
// counter = counter +1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value (or은 첫번째 true가 나오면 바로멈춘다.)
// 만약 value1이 false가 아닌 true면 value2, check함수를 진행하지않고 바로 true
console.log(`or: ${value1 || value2 || check()}`);

// && (and) 에서는 value1에서 false가 나오면 value2, check함수를 진행하지않고 바로 false
console.log(`and : ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("🙂");
  }
  return true;
}

// ! (not)은 반대의 boolean을 적용시킨다.
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;
// == loose equality, with type conversion
// (느슨한 평등, 유형을 변환한다.)
console.log(stringFive == numberFive); // 유형이 달라도 변환하므로 true
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// (엄격한 평등, 유형변환을 하지않는다.)
console.log(stringFive === numberFive); // 유형이 달라도 변환하지 않으므로 false
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // reference가 다르므로 false
console.log(ellie1 === ellie2); // reference가 다르므로 false
console.log(ellie1 === ellie3); // ellie1의 reference를 ellie3에 할당했기 때문에 true

// equality - puzzler
console.log(0 == false);
console.log(0 === false); // 0은 boolean타입이 아니기 때문에 false
console.log("" == false);
console.log("" === false); // ""은 boolean타입이 아니기 때문에 false
console.log(null == undefined);
console.log(null === undefined); // null과 undefined는 다른 타입 false

// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("Unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if check
// use for enum-like value check
// use for multiple type checks in TS
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away !");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you !");
    break;
  default:
    console.log("same all !");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`Q2. ${i}`);
}
