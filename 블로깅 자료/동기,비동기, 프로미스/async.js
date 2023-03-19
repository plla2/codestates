// // 동기, 블로킹
// function employee() {
//   for (let i = 1; i < 101; i++) {
//     console.log(`직원: 사탕 포장하기 ${i}번 수작업`)
//   }
// }

// function boss() {
//   console.log("사장: 출근")
//   employee()
//   console.log("사장: 퇴근");
// }

// boss();

// /*

// 사장: 출근
// 직원: 사탕 포장하기 1번 수작업
// 직원: 사탕 포장하기 2번 수작업
// 직원: 사탕 포장하기 3번 수작업
// .
// .
// .
// 직원: 사탕 포장하기 100번 수작업
// 사장: 퇴근

// */


// 동기, 논블로킹

function* employee() {
  for (let i = 1; i < 101; i++) {
    console.log(`직원: 사탕 포장하기 ${i}번 수작업`)
    yield;
  }
  return;
}

function boss() {
  console.log("사장: 출근");

  const generator = employee();
  let result = {};

  while (!result.done) {
    result = generator.next();
    console.log(`사장: (축구 하이라이트 시청...) 다했음??`)
  }

  console.log("사장: 퇴근");
}

boss();

/*

사장: 출근
직원: 사탕 포장하기 1번 수작업
사장: (축구 하이라이트 시청...) 다했음??
직원: 사탕 포장하기 2번 수작업
사장: (축구 하이라이트 시청...) 다했음??
직원: 사탕 포장하기 3번 수작업
사장: (축구 하이라이트 시청...) 다했음??
.
.
.
직원: 사탕 포장하기 100번 수작업
사장: (축구 하이라이트 시청...) 다했음??
사장: 퇴근

// */

// 비동기 & 논블로킹

function employee(maxCandyCount = 1, callback) {
  let candyCount = 0;
  const interval = setInterval(() => {
    {
      if (candyCount > maxCandyCount) {
        callback();
        clearInterval(interval);
      }
      candyCount++;
      console.log(`직원: 사탕 포장 수작업 ${candyCount}번 수행`);
    }
  }, 10);
}

function boss() {
  console.log("사장: 출근")
  employee(100, () => console.log(`직원: 사탕포장 결과 보고`));
  console.log('사장: 퇴근');
}

boss();

/*

사장: 출근
사장: 퇴근
직원: 사탕 포장 수작업 1번 수행
직원: 사탕 포장 수작업 2번 수행
.
.
.
직원: 사탕 포장 수작업 100번 수행
직원: 사탕포장 결과 보고

*/