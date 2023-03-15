// filter 구문
// arr.filter(callback(element[index[array]])[thisArg]);

/*
callback
각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버린다.

다음 세가지 매개변수를 받는다.
element
처리할 현재 요소

index (Optional)
처리할 현재 요소의 인덱스

array (Optional)
filter를 호출한 배열

thisArg (Optional)
callback을 실행할 때 this로 사용하는 값
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((num) => {
//   return num % 2 === 0
// })
// console.log(evenNumbers);  // [2, 4, 6, 8, 10]

// 예제1. 1~6까지의 배열 중 짝수구하기
// const numbers = [1, 2, 3, 4, 5, 6]

// const evenNum = numbers.filter((num) => {
//   return num % 2 === 0
// })
// console.log(evenNum);  // [2,4,6]

// // 예제1. 10이하의 모든 요소 제거후 새로운 배열 반환
// const numbers = [12, 5, 8, 130, 44];

// const newarr = numbers.filter((el) => {
//   return el >= 10
// })
// console.log(newarr);  // [12, 130, 44]

// // 예제2. 배열 내용 검색
// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// function filterItems(query) {
//   return fruits.filter((el) => {
//     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }
// console.log(filterItems('ap'));  // ['apple', 'grapes']
// console.log(filterItems('an'));  // ['banana', 'mango', 'orange']

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map((num) => {
//   return num * 2
// })
// console.log(doubleNumbers);

// // 예제1. array1 배열에 전체 2곱하여 새로운 배열로 반환
// const array1 = [1, 4, 9, 16]

// const map1 = array1.map(el => {
//   return el * 2
// })
// console.log(map1);  // [2, 8, 18, 32]


// // 예제2. 인자를 받는 함수를 사용하여 숫자 배열 재구성
// let numbers = [1, 4, 9];
// let doubles = numbers.map(num => {
//   return num * 2;
// })
// // doubles는 이제 [2, 8, 18]
// // numbers는 그대로 [1, 4, 9]

// 1부터 4까지 누적을 구한다.
// const sum = [1, 2, 3, 4].reduce((acc, cur, idx, src) => {
//   return acc + cur;
// })
// console.log(sum);


// 예시1. 만화책 배열의 평균점수를 가져오기
//단행본 모음
const cartoons = [
  {
    id: 1,
    bookType: 'cartoon',
    title: '식객',
    subtitle: '어머니의 쌀',
    createdAt: '2003-09-09',
    genre: '요리',
    artist: '허영만',
    averageScore: 9.66,
  },
  {
    id: 2,
    // .. 이하 생략
  },
  // ... 이하 생략
];

// 단행본 한 권의 평점을 누적값에 더한다.
const scoreReducer = function (sum, cartoon) {
  return sum + cartoon.averageScore;
};

// 초기값에 0을 주고, 숫자의 형태로 평점을 누적한다.
let initialValue = 0
// 모든 책의 평점을 누적한 평균을 구한다.
const cartoonsAvgScore = cartoons.reduce(scoreReducer, initialValue) / cartoons.length;
