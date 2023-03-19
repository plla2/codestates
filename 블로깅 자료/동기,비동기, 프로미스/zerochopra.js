// let a = 2;
// setTimeout(() => {
//   a = 5;
//   console.log(a);
// }, 0);

// const p = new Promise((resolve, reject) => {
//   console.log("제일 먼저"); // Promise문은 프로미스가 바로 호출되어, 내부의 함수가 바로 실행되어 값이  p에 대입되고 console.log("딴짓")으로 넘어가는 것이다.  암기!!!
//   setTimeout(() => {
//     a = 5;
//     console.log(a);
//     resolve(a)  // 결괏값
//   }, 0);
// });
// // 프로미스란 실행은 바로 하는데, 결괏값을 내가 원할때 가져다 쓸수 있는 것.
// // 한번 비동기는 영원한 비동기
// // 비동기는 동기의 문제가 아니다. 순서의 문제다
// console.log("딴짓")
// // 딴짓
// // 딴짓
// // 딴짓
// // 딴짓
// p.then((result) => {
//   console.log('result: ', result);
// }).then(() => {

// }).then(() => {

// }).then(() => {

// }).then(() => {

// }).catch(() => {

// }).finally(() => {

// });

// function delayP(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms)
//   })
// }
// async function a() {
//   try {
//     await delayP(1000);
//     await delayP(1000);
//     await delayP(1000);
//     await delayP(1000);
//   } catch (error) {
//     console.error(error);
//   }
// }


async function ex() {
  const a = await 1;   // await -> then
  console.log("a", a);
  console.log("hmm");
  await null;
  const b = await Promise.resolve(1);
  console.log("b", b);
  return b;
}
//위의 async/await을 Promise로 바꾸면??

Promise.resolve(1)
  .then((a) => {
    console.log("a", a)
    console.log("hmm");
    return null;
  })
  .then(() => {
    return Promise.resolve(1);
  })
  .then((b) => {
    console.log("b", b)
    return b;
  })