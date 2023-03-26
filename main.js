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
let rsp = solution("205");

function solution(rsp) {
  let result = "";
  rsp = rsp.split("")
  console.log(rsp);
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === 0) {
      return result += "5"
    } else if (rsp[i] === 2) {
      return result += "0"
    } else {
      return result += "2"
    }
  }
  return result;
}
