"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["๐", "๐"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // ๋ฐฐ์ด์ ๋ง์ง๋ง์ ์ฐพ์๋ ์.

console.clear();
// 3. Looping over an array
// print all fruits (์๋ a,b,c ๋ฐฉ๋ฒ์ ๋ชจ๋ ๊ณผ์ผ๋ค์ ๋ํ๋ด๊ฒ ํ  ์ ์๋ ๋ฐฉ๋ฒ)

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); // Arrow function ์ ์ด์ฉํจ.

// 4. Addition, deletion, copy
// push: add an item to the end (๋ค์์ ์ถ๊ฐ๋จ.)
fruits.push("๐", "๐");
console.log(fruits);

// pop: remove an item from the end (๋งจ๋ค๋ถํฐ ์ ๊ฑฐ๋จ.)
fruits.pop();
fruits.pop(); // ๋ค์ชฝ๋ถํฐ ์ ๊ฑฐํ  ๊ฐ์๋งํผ ์ฌ์ฉํ๋ฉด ๋จ
console.log(fruits);

// unshift: add an item to the benigging (์์์ ์ถ๊ฐ๋จ.)
fruits.unshift("๐", "๐");
console.log(fruits);

// shift: remove an item to the benigging (๋งจ์๋ถํฐ ์ ๊ฑฐ๋จ.)
fruits.shift();
fruits.shift(); // pop๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก ๊ฐ์๋งํผ ์ ๊ฑฐ๋จ
console.log(fruits);

// note !! shift, unshift are slower than  pop, push
// ์ด์ ๋  shift, unshift๋ฅผ ์ฌ์ฉํ๋ฉด ๋ฐฐ์ด์ ๋ค ๋ฏธ๋ฃจ๊ฑฐ๋, ๋น๊ฒจ์ ์ง์ด๋ฃ๊ณ , ์ญ์ ํ  ์ ์๊ธฐ๋๋ฌธ์ ์๋๊ฐ ๋ ๋๋ฆผ.
// ๋ฐ๋ฉด pop, push ๋ ๋ฐฐ์ด์ ๋ฏธ๋ฃจ๊ฑฐ๋ ๋น๊ธธ ํ์์์ด ๋ค์์ ์ง์ด๋ฃ๊ฑฐ๋, ์ญ์ ํ๋ฉด ๋๊ธฐ ๋๋ฌธ์ ์๋๊ฐ ๋ ๋น ๋ฆ.
// ๋ฐ๋ผ์ shift, unshift ๋ณด๋จ pop, push๋ฅผ ์ฌ์ฉํ๊ธธ ๊ถ์ฅํจ.

// splice: remove an item by index position(์ํ๋ ์์น์ ๊ฐ์๋ฅผ ์ ํด ์ง์ธ ์ ์๋ค.)
fruits.push("๐", "๐", "๐");
console.log(fruits);
fruits.splice(1, 1); // splice(์์index, ๊ฐ์)
console.log(fruits);

fruits.splice(1, 1, "๐ซ", "๐"); // ์ง์ด์๋ฆฌ์ ์ด์ด์ ์ถ๊ฐํ  ์๋ ์๋ค.
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["๐", "๐ฅ"];
const newFruits = fruits.concat(fruits2); // .concat ์์ ๋ฐฐ์ด์ ()๋ด๋ถ์ ๋ฐฐ์ด์ ํฉ์ณ์ ์ ๋ฐฐ์ด์ ๋ง๋ ๋ค.
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("๐")); // ๋ฐฐ์ด์์ ("~")๊ฐ ๋ช๋ฒ์งธ์ ์๋์ง ํ์ธ
console.log(fruits.indexOf("๐"));
console.log(fruits.indexOf("๐ฅ")); // ๋ฐฐ์ด์์ ํ ๋นํ๋ ๊ฐ์ด ์์๋ -1์ด ์ถ๋ ฅ

// includes
console.log(fruits.includes("๐")); // ๋ฐฐ์ด์์ ("~")๊ฐ ์๋์ง True/False๋ก ํ์ธ
console.log(fruits.includes("๐ฅฅ"));

// lastIndexOf (๋ง์ฝ ๋ฐฐ์ด์์ ๊ฐ์ ๊ฐ์ด ๋๊ฐ ์ด์ ์์ ๋)
console.clear();
fruits.push("๐");
console.log(fruits);
console.log(fruits.indexOf("๐")); // ์ฒซ๋ฒ์งธ index์ ์์น๋ฅผ ์๋ ค์ค๋ค.
console.log(fruits.lastIndexOf("๐")); // ๋ง์ง๋ง index์ ์์น๋ฅผ ์๋ ค์ค๋ค.
