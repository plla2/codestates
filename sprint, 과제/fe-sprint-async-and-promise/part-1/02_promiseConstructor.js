// const sleep = (wait) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, wait);
//   });
// }

const sleep = (wait) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, wait);
  });
}