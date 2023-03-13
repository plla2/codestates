// 일급객체 예제
// const mul = function (num) {
//   return num * num;
// };

// function mul(num) {
//   return num * num;
// }

// // func는 매개변수임, 이름은 아무거나해도 상관없음
// function mulNum(func, number) {
//   return func(number);
// }

// // mul을 인자로 받는 mulNum이 고차함수
// // mul은 콜백함수
// let result = mulNum(mul, 3);

// function add(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }

// add(3)(4); // 7

// 고차함수 예제
// function double(num){
//   return num*2;
// }

// // doubleNum 함수는 고차함수이다. (다른 함수를 인자로 받음)
// // doubleNum 함수의 매개변수 func에 함수가 들어올 경우
// // func는 doubleNum의 콜백 함수이다.
// function doubleNum(func, num){
//   return func(num);
// }

// // 아래의 경우 double은 doubleNum의 콜백 함수이다.
// doubleNum(double,4);  // 8

// // abc 함수는 고차함수이다. (다른함수를 리턴한다. *아래의 num-def가 들어있는 함수*)
// function abc(def){
//   return function (num){
//     return num - def;
//   }
// }
// // abc(5)는 함수이므로 호출 연산자 '()'를 사용할 수 있다.
// abc(5)(2) // -3   *def 자리에 5, num 자리에 2가 들어간다. 따라서 2-5= -3

// // abc 함수가 리턴하는 함수를 변수에 저장할 수 있다.
// // 이는 자바스크립트에서 함수는 일급 객체이기 때문이다.
// const subs = abc(5);
// subs(10) // 5    *def 자리에 5, num 자리에 10이 들어간다.  따라서 10-5= 5

function double(num) {
  return num * 2;
}
// doubleSub 함수는 고차 함수
function doubleSub(subtract, func) {
  const doubled = func(subtract);
  return function (num) {
    return num - doubled;
  };
}
// double 함수는 doubleSub 함수의 콜백으로 전달되었다.
doubleSub(5, double)(18); // 8
