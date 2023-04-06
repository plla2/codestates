// let output1 = letterCapitalize('hello world');

// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "

// function letterCapitalize(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newStr = str.replace(/\b[a-z]/g, char => char.toUpperCase());
//   return (newStr);
// }


// const arr = [
//   ['make', 'Ford'],
//   ['model', 'Mustang'],
//   ['year', '1964'],
//   ['make', 'Bill'],
// ];

// let output = convertListToObject(arr);


// console.log(output) // -->{ make : 'Ford', model : 'Mustang', year : '1964' }

// function convertListToObject(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
//       result[arr[i][0]] = arr[i][1];
//     }
//   }

//   return result;
// }

// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); // --> "string with double spaces"

// function convertDoubleSpaceToSingle(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let sol = str.replace(/^\s+|\s{2,}/g, " ");
//   return sol;
// }

// function ABCheck(str) {
//   // code goes here
//   str = str.toLowerCase();
//   const sol = [];
//   for (let i = 0; i <= str.length - 5; i++) {
//     sol.push(str.substring(i, i + 5));
//   }

//   for (let i = 0; i < sol.length; i++) {
//     if (
//       (sol[i][0] === 'a' && sol[i][4] === 'b') ||
//       (sol[i][0] === 'b' && sol[i][4] === 'a')
//     ) {
//       return true;
//     }
//   }

//   return false;
// }

// let output1 = ABCheck('lane Borrowed');
// console.log(output1); // --> true
// let output2 = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
// console.log(output2); // --> true

// function solution(message1) {
//   sol = (message1.length) * 2
//   return sol;
// }

// let message1 = solution("happy birthday!");
// console.log(message1); // --> 30
// let message2 = solution("l love you~");
// console.log(message2); // --> 22
// let rsp = solution("205");

// function solution(rsp) {
//   let result = "";
//   rsp = rsp.split("")
//   console.log(rsp);
//   for (let i = 0; i < rsp.length; i++) {
//     if (rsp[i] === 0) {
//       return result += "5"
//     } else if (rsp[i] === 2) {
//       return result += "0"
//     } else {
//       return result += "2"
//     }
//   }
//   return result;
// }


// function insertDash(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i > 0 && (str[i] % 2 === 1) && (str[i - 1] % 2 === 1)) {
//       result += '-';
//     }
//     result += str[i];
//   }
//   return result;
// }

// let output = insertDash('454793')
// console.log(output)


// function removeExtremes(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];

//   longestLen = 0;
//   longestIdx = 0;
//   shortestLen = 20;
//   shortestIdx = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= longestLen) {
//       longestLen = arr[i].length;
//       longestIdx = i;
//     }
//     if (arr[i].length <= shortestLen) {
//       shortestLen = arr[i].length;
//       shortestIdx = i;
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (j !== longestIdx && j !== shortestIdx) {
//       result.push(arr[j]);
//     }
//   }
//   return result;
// }


// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]


// function findBugInApples(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('B')) {
//       let index = arr[i].indexOf('B');
//       return [i, index];
//     }
//   }
// }

// let output = findBugInApples([['A'], ['B']]);
// console.log(output); //[1, 0]

// output = findBugInApples([
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'B', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
// ]);
// console.log(output); //[1, 1]

// // 고차 함수
// function each(array, iterator) {
//   for (let i = 0; i < array.length; i++) {
//     iterator(array[i], i, array)
//   }
// }
// // 콜백 함수
// function printIterator(element, index, array) {
//   console.log(element, index, array)
// }

// each([1, 2, 3, 4, 5], printIterator)


// function readVertically(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (maxLength < arr[i].length) {
//       maxLength = arr[i].length;
//     }
//   }

//   let result = '';
//   for (let i = 0; i < maxLength; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] === undefined) {
//         continue;
//       }
//       result += arr[j][i];
//     }
//   }
//   return result;
// }


// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

// input = [
//   //
//   'hi',
//   'wolrd',
// ];
// output = readVertically(input);
// console.log(output); // --> 'hwiolrd'


// // 문제
// function add(x, y) {
//   console.log(x, y);   // 2 3
//   return x + y;
// }

// add(2, 3);
// console.log(x, y)     // x is not defined


// 이상적인 함수는 한가지 일만 해야하며 가급적 크게 만들어야한다  // x(작게)
// function키워드 대신 화살표를 사용할 때 항상 익명함수를 사용해야한다. // o
// 함수선언문은 함수이름을 생략할 수 있다. // x

// 이름(name)을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 만들고 
// 매개변수로 전달받은 이름을 콘솔로그로 반환하게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”

// function greet(Name) {
//   console.log("안녕 내 이름은", Name, "야");
//   // return Name;
// }
// greet("plla2");
// // console.log("안녕 내 이름은", Name, "이야");
// const greet = (Name) => {
//   console.log(`안녕 내이름은 ${Name}`)
// }

// function modulo(num1, num2) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (num2 === 0) { return 'Error: cannot divide by zero' }
//   if (num1 === 0) { return 0 };
//   while (num1 >= num2) {
//     num1 = num1 - num2
//   }
//   return num1
// }

// let output = modulo(25, 4);
// console.log(output); // --> 1

// function isIsogram(str) {
//   //빈 문자열을 입력받은 경우, true를 리턴
//   if (str.length === 0) {
//     return true;
//   }
//   //새로운 문자열 선언
//   let result = {};
//   //모두 소문자로 정리
//   let strLowered = str.toLowerCase();

//   for (let i = 0; i < strLowered.length; i++) {
//     if (result[strLowered[i]]) {
//       return false;
//     }
//     result[strLowered[i]] = true;
//   }

//   return true;
// }

// let output = isIsogram('aba');
// console.log(output); // false

// output = isIsogram('Dermatoglyphics');
// console.log(output); // true

// output = isIsogram('moOse');
// console.log(output); // false


// function numberSearch(str) {
//   let strLength = 0;
//   let sum = 0;

//   if (str.length === 0) return 0;

//   for (let i = 0; i < str.length; i++) {
//     let numbering = Number(str[i]);
//     if (isNaN(numbering)) strLength++;
//     else sum += numbering;
//   }

//   return Math.round(sum / strLength);

// }
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 2

// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2

function computeSquareRoot(num) {
  return Number((Math.pow(num, 0.5)).toFixed(2));
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45