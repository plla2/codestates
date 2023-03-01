let circle = {
  radius: 5,
  getDiameter: function () {
    return 2 * this.radius;
  },
};
console.log(circle.radius);
circle.radius = 4;
console.log(circle.radius);
console.log(circle.getDiameter());

// 객체, 배열 문제
// 문제 1
// const arr=[1,2,3,4,5];
// let result= arr.push(6,7);
// console.log(result);
// console.log(arr);
// 해답 1
//   7  변경된 length의 값을 반환한다.
//   [1,2,3,4,5,6,7]  변경된 배열arr을 반환

// 문제 2
// const arr=[1,2,3,4,5];
// let result=arr.pop();
// console.log(result);
// console.log(arr);
// 해답 2
// 5          맨마지막 요소를 반환
// [1,2,3,4]  맨마지막 요소를 제거하고 배열반환

// 문제3
// 원본배열 가공/ 새로운 배열 또는 값 생성하여 반환
// push() , unshift(), splice(),  join(), slice(), concat()
// 해답3
//원본배열 push unshift splice        // 새로운 배열 생성 join  slice  concat

// 문제4
//프로퍼티 접근방법 중 잘못된 것
// let person = {
//   name = "Jeong"
// };
// 해답4
// console.log(person['name']);
// console.log(person.name);
// console.log(person[name]);   <-- 답
