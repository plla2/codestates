// 중첩된 콜백의 문제점
// 콜백 지옥...

// // 즉시 실행, 동기적으로 실행되고 있는 함수(A)의 콜백함수 (B)
// function A(callback) {
//   callback();
// }

// function B() {
//   console.log("여기 콜백이요~!");
// }

// A(B) // "여기 콜백이요~!"
// // 필요에 따라서 callback 함수를 비동기적으로 실행할 수 있음


// // 동기 콜백호출
// // 동기적으로 3초마다 배열의 수가 출력
// [1, 2, 3].foreach((num) => {
//   // 콘솔 한번 찍히려면 매번 3초씩 걸림
//   // 이 함수의 콜백 함수는 동기적으로 호출
//   imCallbackFn(() => console.log(num), 3000);
// });

// function imCallbackFn(callback) {
//   let start = Date.now();
//   let now = start;
//   while (now - start < 3000) {
//     now = Date.now();
//   }
//   callback();
// }

// // 콘솔 출력까지 총 수행시간 3*3 =9초
// // 의도적으로 타이머의 기능이 필요하다면 동기적 콜백 호출이 필요할 수도 있음


// // 비동기적으로 3초 이후 배열의 수가 출력
// [1, 2, 3].forEach((num) => {
//   // 자바스크립트 런타임의 setTimeout 함수를 사용.
//   // 3초 이후 콘솔이 모두 출력
//   // 이 함수의 콜백 함수는 비동기적 출력
//   setTimeout(() => console.log(num), 3000);
// })

// // 콘솔 출력까지 총 수행시간 = 3초
// // 블로킹을 해결하고 속도를 개선하려면 비동기적 콜백 호출을 이용


// function order(request, callback) {
//   console.log(`${request} 주문이 접수되었습니다.`);
//   setTimeout(() => callback(request), 3000);
// }

// let request = "피자";

// // callback으로 비동기 함수 전달
// order(request, (response) => {
//   console.log(`주문하신 ${response} 나왔습니다!`);
// })


// function fn() {
//   console.log("첫번째");
//   setTimeout(() => console.log("두번째"), 0);
//   console.log("세번째");
// }

// fn()  // 결과 : "첫번째" , "세번째" , "두번째"

// function fn() {
//   setTimeout(() => {
//     console.log("첫번째");
//     setTimeout(() => {
//       console.log("두번째");
//       setTimeout(() => {
//         console.log("세번째");
//         setTimeout(() => {
//           console.log("네번째");
//         },0)
//       },0)
//     },0)
//   },0)
// }

// fn(); // 결과 : "첫번째", "두번째", "세번째", "네번째"


// // Promise 패턴 1 : 작업이 성공했을 때
// function fn() {
//   new Promise((resolve, reject) => {
//     console.log("첫번째");
//     resolve();
//     // 만약 실패했으면 reject()함수를 호출함
//     // 그럼 then()을 건너뛰고 catch() 실행
//   })
//     .then(() => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("두번째");
//           resolve();
//         }, 0);
//       });
//     })
//     .then(() => {
//       console.log("세번째");
//     })
//     .catch((err) => {
//       console.log("err: ", err);
//     })
// }
// fn();


// // Promise 패턴 2: 작업이 성공했을 때
// // 패턴1과 똑같아보이지만, fn() 함수 안에서 Promise를 반환하였다.

// function fn() {
//   return new Promise((resolve, reject) => resolve());
// }

// // Promise를 반환했기 때문에 num변수도 Promise타입으로 바뀜.
// const num = fn();

// num.then((p) => {
//   console.log(p);
//   console.log("첫번째");
// })
//   .then(() => {
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("두번째");
//         resolve();
//       }, 0);
//     });
//   })
//   .then(() => {
//     console.log("세번째");
//   })
//   .catch((err) => {
//     console.log("err: ", err);
//   });
// fn() // 결과 : undefined, "첫번째", "두번째", "세번째"


// // Promise 패턴 3: 데이터 전달하기
// function fn() {
//   new Promise((resolve, reject) => {
//     resolve("첫번째")
//   })
//     .then((data) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(data + "두번째");
//         }, 0)
//       })
//     })
//     .then((data) => {
//       return data + "세번째"
//     })
//     .then((data) => {
//       console.log(data + "네번째")
//     })
//     .catch((err) => {
//       console.log("err: ", err);
//     })
// }
// fn();  // 결과 : 첫번째두번째세번째네번째


// // '첫번째두번째세번째네번째' 텍스트 이어서 출력
// async function fn() {
//   let text = "첫번째";
//   text = text + await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("두번째");
//     }, 0);
//   });
//   text += "세번째";
//   console.log(text + "네번째");
// }

// fn(); // 결과 : 첫번째두번째세번째네번째