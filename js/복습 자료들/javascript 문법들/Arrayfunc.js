// 유용한 배열함수 7가지

let names = [
  "Steve Paul Jobs",
  "Bill Gates",
  "Mark Elliot Zuckerberg",
  "Elon Musk",
  "Jeff Bezos",
  "Warren Edward Buffett",
  "Larry Page",
  "Larry Ellison",
  "Tim Cook",
  "Lloyd Blankfein",
];

let ceoList = [
  { name: "Larry Page", age: 23, ceo: true },
  { name: "Tim Cook", age: 40, ceo: true },
  { name: "Elon Musk", age: 55, ceo: false },
];

// 1. forEach()

names.forEach((index, item) => console.log(index, item)); // item은 forEach()가 알아서 회전하면서 매번 아이템 하나씩을 넘긴다.

// 2. map(),  map()은 내가 원하는 데이터만 쏙 골라오고싶을 때 자주사용.
let data = ceoList.map((item) => {
  return item.name;
});
console.log(data);

// 3. filter()
let data2 = names.filter((item) => {
  return item.startsWith("L");
});
console.log(data2);

// 4. some()
let data3 = names.some((item) => {
  return item.startsWith("L");
});
console.log(data3);

// 5. every()
let data4 = names.some((item) => {
  return item.length > 0;
});
console.log(data4);

// 6. find()
let data5 = names.find((item) => {
  return item == "Larry Page";
});
console.log(data5);

// 7. findIndex()
let data6 = names.findIndex((item) => {
  return item == "Larry Page";
});
console.log(data6);
