// // 콜백 지옥
// // 콜백함수가 또다른 콜백함수를 부르는 상황
// function orderAPI(doNext) {
//   setTimeout(() => {
//     console.log("[주문 완료]!")
//     doNext()
//   }, 1000)
// }
// function paymentAPI(doNext) {
//   setTimeout(() => {
//     console.log("[결제 완료]!")
//     doNext()
//   }, 1000)
// }
// function deliveryAPI(doNext) {
//   setTimeout(() => {
//     console.log("[배달 완료]!")
//     doNext()
//   }, 1000)
// }
// function reviewAPI(doNext) {
//   setTimeout(() => {
//     console.log("[리뷰 완료]!")
//     doNext()
//   }, 1000)
// }

// orderAPI(() => {
//   paymentAPI(() => {
//     deliveryAPI(() => {
//       reviewAPI(() => {
//         console.log("끝!!")
//       })
//     })
//   })
// })


// // 프로미스
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       resolve("성공");
//     } else {
//       reject("실패");
//     }
//   })
// })
// // console.log(promise1)

// promise1.then((result) => { console.log(result) })
//   .catch((err) => { console.log(err) })
//   .finally(() => { console.log("끝") })


// // 기존 콜백을 프로미스로

// function orderAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.8) {
//         console.log("주문완료!!");
//         resolve()
//       } else {
//         console.log("주문실패...")
//         reject()
//       }
//     }, 1000);
//   })
// }
// function paymentAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.8) {
//         console.log("결제완료!!");
//         resolve()
//       } else {
//         console.log("결제실패...")
//         reject()
//       }
//     }, 1000);
//   })
// }
// function deliveryAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.8) {
//         console.log("배달완료!!");
//         resolve()
//       } else {
//         console.log("배달실패...")
//         reject()
//       }
//     }, 1000);
//   })
// }
// function reviewAPI() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.8) {
//         console.log("리뷰완료!!");
//         resolve()
//       } else {
//         console.log("리뷰실패...")
//         reject()
//       }
//     }, 1000);
//   })
// }

// orderAPI().then(() => { console.log(paymentAPI()) })
//   .then(() => { console.log(deliveryAPI()) })
//   .then(() => { console.log(reviewAPI()) })
//   .catch((err) => { console.log(err) })
//   .finally(() => { console.log("end") })


//사과를 반환하는 프로미스
function applePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🍎");
    }, 1000)
  })
}

// //사과 3개를 먹는 프로미스 체이닝
// function eatThreeApples() {
//   applePromise()
//     .then((apple) => {
//       console.log(`${apple} 아쥬 맛있엉~`)
//       return applePromise()
//     })
//     .then((apple) => {
//       console.log(`${apple} 중말 맛있당~`)
//       return applePromise()
//     })
//     .then((apple) => {
//       console.log(`${apple} 냠냠냠`)
//       console.log("잘 먹었숩니다~~~")
//     })
// }
// eatThreeApples();

// 사과 예제를 async / await로 변환
async function eatThreeApplesAsync() {
  const apple0 = await applePromise();
  console.log(`${apple0} 아쥬 맛있엉~`);

  const apple1 = await applePromise();
  console.log(`${apple1} 중말 맛있땅~`)

  const apple2 = await applePromise();
  console.log(`${apple2} 냠냠냠`)
  console.log("잘 먹었습니다아~~")
}
eatThreeApplesAsync();