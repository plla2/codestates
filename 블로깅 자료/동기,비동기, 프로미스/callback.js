// 1.동기 함수
// 순차적으로 수행되는 함수
// 결과물을 받아야, 다음작업 진행
// 장점 : 실행흐름 파악 쉬움
// 단점: 대기시간 누적으로 처리지연 증가

// 동기적 시간 지연 함수

// function sleep(ms) {
//   //깨어날 시간
//   const wakeUpTime = Date.now() + ms;

//   //깨어날 시간까지 대기
//   while (Date.now() < wakeUpTime) {
//     // do nothing (아무일도 하지않음)
//   }
// }

// // 집안일을 동기적으로 처리
// function synchronousSample() {
//   // 집안일 하기 ( 10분 = 1초)
//   sleep(6000); // 6초 대기
//   console.log("세탁기 돌리기(60분)")
//   sleep(1500); // 1.5초 대기
//   console.log("재료 손질(15분)");
//   sleep(2000); // 2초 대기
//   console.log("요리 하기(20분)");
//   sleep(1500); // 1.5초 대기
//   console.log("식사 하기(15분)");
//   sleep(1000); // 1초 대기
//   console.log("설거지 하기(10분)");
// }

// synchronousSample();


// 2. 비동기 함수
// 비 순차적으로 수행되는 함수
// 결과물을 받지않고, 다음을 진행
// 주로 외부 자원(서버, DB, API 등) 네트워크 요청시 사용
// 장점: 요청 결과를 기다리지 않고, 다른 작업이 가능
// 단점: 실행 흐름 파악이 어려울 수 있음.

// function asynchronousSample() {
//   const start = Date.now();

//   setTimeout(() => {
//     console.log("세탁기 60분");
//   }, 6000);

//   setTimeout(() => {
//     console.log("재료손질 15분");
//   }, 1500);
//   setTimeout(() => {
//     console.log("요리하기 20분");
//   }, 2000);
//   setTimeout(() => {
//     console.log("식사하기 15분");
//   }, 1500);
//   setTimeout(() => {
//     console.log("설거지 20분");
//   }, 2000);

//   const end = Date.now();
//   console.log(`총 실행시간 ${(end - start) / 100}분`)
// }

// asynchronousSample()


// 3. 콜백
// 함수를 파라미터로 받아, 함수 호출을 하는 기법
// 비동기 함수의 연속성을 위해, 주로사용
// 예 1 : setTimeout(callback, delay)
// 예 2 : addEventListener(event, callback)

// 집안일을 위한 콜백 함수
function housework(task, delay, doNext) {
  // setTimeout(지연시간 후 동작시킬 함수, 지연시간);
  setTimeout(() => {
    console.log(task);
    doNext(); // 콜백 수행 : 파라미터로 전달된 함수를 호출
  }, delay);
}

// 콜백 함수를 적용하여, 비동기 함수의 연속성 부여
function callbackSample() {
  // 세탁기를 돌리고, 콜백으로 소요시간 측정
  const startA = Date.now();
  housework("세탁기 돌리기 (60분)", 6000, () => {
    console.log(`세탁 완료까지 : ${(Date.now() - startA) / 100}분`)
  });

  // 식사를 위한 일련의 작업 후, 콜백으로 소요시간 측정 (콜백지옥)
  const startB = Date.now();
  housework("재료손질 (15분)", 1500, () => {
    housework("요리하기(20분)", 2000, () => {
      housework("식사하기(15분)", 1500, () => {
        housework("설거지하기(10분)", 1000, () => {
          console.log(`재료 손질부터 ~ 설거지 완료까지 ${(Date.now() - startB) / 100}분`)
        })
      })
    })
  })
}
callbackSample();