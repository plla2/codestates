"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막을 찾을때 씀.

console.clear();
// 3. Looping over an array
// print all fruits (아래 a,b,c 방법은 모든과일들을 나타내게 할 수 있는 방법)

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); // Arrow function 을 이용함.

// 4. Addition, deletion, copy
// push: add an item to the end (뒤에서 추가됨.)
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end (맨뒤부터 제거됨.)
fruits.pop();
fruits.pop(); // 뒤쪽부터 제거할 개수만큼 사용하면 됨
console.log(fruits);

// unshift: add an item to the benigging (앞에서 추가됨.)
fruits.unshift("🍋", "🍇");
console.log(fruits);

// shift: remove an item to the benigging (맨앞부터 제거됨.)
fruits.shift();
fruits.shift(); // pop과 마찬가지로 개수만큼 제거됨
console.log(fruits);

// note !! shift, unshift are slower than  pop, push
// 이유는  shift, unshift를 사용하면 배열을 다 미루거나, 당겨서 집어넣고, 삭제할 수 있기때문에 속도가 더 느림.
// 반면 pop, push 는 배열을 미루거나 당길 필요없이 뒤에서 집어넣거나, 삭제하면 되기 때문에 속도가 더 빠름.
// 따라서 shift, unshift 보단 pop, push를 사용하길 권장함.

// splice: remove an item by index position(원하는 위치와 개수를 정해 지울 수 있다.)
fruits.push("🍋", "🍇", "🍑");
console.log(fruits);
fruits.splice(1, 1); // splice(시작index, 개수)
console.log(fruits);

fruits.splice(1, 1, "🫐", "🍉"); // 지운자리에 이어서 추가할 수도 있다.
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["🍐", "🥝"];
const newFruits = fruits.concat(fruits2); // .concat 앞의 배열에 ()내부의 배열을 합쳐서 새 배열을 만든다.
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍉")); // 배열속에 ("~")가 몇번째에 있는지 확인
console.log(fruits.indexOf("🍇"));
console.log(fruits.indexOf("🥝")); // 배열속에 할당하는 값이 없을땐 -1이 출력

// includes
console.log(fruits.includes("🍉")); // 배열속에 ("~")가 있는지 True/False로 확인
console.log(fruits.includes("🥥"));

// lastIndexOf (만약 배열안에 같은 값이 두개 이상 있을 때)
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // 첫번째 index의 위치를 알려준다.
console.log(fruits.lastIndexOf("🍎")); // 마지막 index의 위치를 알려준다.
