// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// let output = transformFirstAndLast(arr);
// console.log(output); // --> { Queen : 'Beyonce' }

// arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
// output = transformFirstAndLast(arr);
// console.log(output); // --> { Kevin : 'Spacey' }

// function transformFirstAndLast(arr) {
//   let sol = {};
//   if (arr.length === 0) { return {} }
//   sol[arr[0]] = arr[arr.length - 1];
//   return sol;
// }


// // 함수 객체는 prototype 프로퍼티를 소유한다.
// (function () {}).hasOwnProperty('prototype');  // true

// // 일반 객체는 prototype 프로퍼티를 소유하지않는다.
// ({}).hasOwnProperty('prototype');  // false

// 화살표 함수는 non-constructor
const Person = name => {
  this.name = name;
}

// non-constructor는 prototype 프로퍼티를 소유하지 않음
console.log(Person.hasOwnProperty('prototype'));  // false

// non-constructor는 프로토타입을 생성하지 않음
console.log(Person.prototype);  // undefined