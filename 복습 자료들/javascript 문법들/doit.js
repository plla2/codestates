// let season = ["봄", "여름", "가을", "겨울"];
// console.log(season[0]);

// let numberOne = 15 / 2;
// let numberTwo = 15 % 2;
// console.log(numberOne);
// console.log(numberTwo);

// let userNumber = prompt("숫자를 입력하세요.");

// if (userNumber !== null) {
//   if (userNumber % 3 === 0) {
//     alert("3의 배수입니다.");
//   } else {
//     alert("3의 배수가 아닙니다.");
//   }
// } else {
//   alert("입력이 취소되었습니다.");
// }

// let Usernumber = prompt("숫자를 입력하세요.");

// if (Usernumber !== null) {
//   Usernumber % 3 === 0
//     ? alert("3의 배수입니다.")
//     : alert("3의 배수가 아닙니다.");
// } else {
//   alert("입력이 취소되었습니다.");
// }

// let session = prompt("관심 세션을 선택하세요. 1-마케팅, 2-개발, 3-디자인");
// switch (session) {
//   case "1":
//     console.log("마케팅 세션은 201호 에서 합니다.");
//     break;
//   case "2":
//     console.log("개발 세션은 203호 에서 합니다.");
//     break;
//   case "3":
//     console.log("디자인 세션은 205호 에서 합니다.");
//     break;
//   default:
//     alert("잘못 입력했습니다.");
// }

// let memNum = prompt("입장객 수");
// let colNum = prompt("한줄에 몇명씩 앉습니까?");

// if (memNum % colNum === 0) {
//   rowNum = parseInt(memNum / colNum);
// } else {
//   rowNum = parseInt(memNum / colNum) + 1;
// }
// console.log(`모두 ${rowNum}줄로 앉힐 수 있다.`);

// let userNumber = parseInt(prompt("숫자를 입력하세요."));

// if (userNumber !== null) {
//   if (userNumber % 4 === 0) console.log(`${userNumber}는 4의 배수입니다.`);
//   else console.log(`${userNumber}는 4의 배수가 아닙니다.`);
// } else {
//   console.log("입력을 취소하였습니다.");
// }

let i;
let userNumber = parseInt(prompt("몇까지 3의 배수를 찾을까요?"));
let count = 0;

if (userNumber !== null) {
  for (i = 1; i <= userNumber; i++) {
    if (i % 3 === 0) {
      count++;
      console.log(`${i}`);
    }
  }
  console.log(`${userNumber}까지 3의 배수의 갯수: ${count}`);
}
