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

// const arr=[1,2,3,4,5];

// let result= arr.push(6,7);
// console.log(result);  7  변경된 length의 값을 반환한다.
// console.log(arr);   [1,2,3,4,5,6,7]  변경된 배열arr을 반환

// const arr=[1,2,3,4,5];

// let result=arr.pop();
// console.log(result);   5          맨마지막 요소를 반환
// console.log(arr);      [1,2,3,4]  맨마지막 요소를 제거하고 배열반환
