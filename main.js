// let output1 = letterCapitalize('hello world');
// import { func } from 'prop-types';

// console.log(output1); // "Hello World"
// let output2 = letterCapitalize('javascript  is sexy ');
// console.log(output2); // "Javascript  Is Sexy "

// function letterCapitalize(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let newStr = str.replace(/\b[a-z]/g, char => char.toUpperCase());
//   return (newStr);
// }


// const arr = [
//   ['make', 'Ford'],
//   ['model', 'Mustang'],
//   ['year', '1964'],
//   ['make', 'Bill'],
// ];

// let output = convertListToObject(arr);


// console.log(output) // -->{ make : 'Ford', model : 'Mustang', year : '1964' }

// function convertListToObject(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
//       result[arr[i][0]] = arr[i][1];
//     }
//   }

//   return result;
// }

// let output = convertDoubleSpaceToSingle('string  with  double  spaces');
// console.log(output); // --> "string with double spaces"

// function convertDoubleSpaceToSingle(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   let sol = str.replace(/^\s+|\s{2,}/g, " ");
//   return sol;
// }

// function ABCheck(str) {
//   // code goes here
//   str = str.toLowerCase();
//   const sol = [];
//   for (let i = 0; i <= str.length - 5; i++) {
//     sol.push(str.substring(i, i + 5));
//   }

//   for (let i = 0; i < sol.length; i++) {
//     if (
//       (sol[i][0] === 'a' && sol[i][4] === 'b') ||
//       (sol[i][0] === 'b' && sol[i][4] === 'a')
//     ) {
//       return true;
//     }
//   }

//   return false;
// }

// let output1 = ABCheck('lane Borrowed');
// console.log(output1); // --> true
// let output2 = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
// console.log(output2); // --> true

// function solution(message1) {
//   sol = (message1.length) * 2
//   return sol;
// }

// let message1 = solution("happy birthday!");
// console.log(message1); // --> 30
// let message2 = solution("l love you~");
// console.log(message2); // --> 22
// let rsp = solution("205");

// function solution(rsp) {
//   let result = "";
//   rsp = rsp.split("")
//   console.log(rsp);
//   for (let i = 0; i < rsp.length; i++) {
//     if (rsp[i] === 0) {
//       return result += "5"
//     } else if (rsp[i] === 2) {
//       return result += "0"
//     } else {
//       return result += "2"
//     }
//   }
//   return result;
// }


// function insertDash(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i > 0 && (str[i] % 2 === 1) && (str[i - 1] % 2 === 1)) {
//       result += '-';
//     }
//     result += str[i];
//   }
//   return result;
// }

// let output = insertDash('454793')
// console.log(output)


// function removeExtremes(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let result = [];

//   longestLen = 0;
//   longestIdx = 0;
//   shortestLen = 20;
//   shortestIdx = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length >= longestLen) {
//       longestLen = arr[i].length;
//       longestIdx = i;
//     }
//     if (arr[i].length <= shortestLen) {
//       shortestLen = arr[i].length;
//       shortestIdx = i;
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (j !== longestIdx && j !== shortestIdx) {
//       result.push(arr[j]);
//     }
//   }
//   return result;
// }


// let output = removeExtremes(['a', 'b', 'c', 'def']);
// console.log(output); // --> ['a', 'b']

// output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
// console.log(output); // --> ['where', 'the', 'word',]


// function findBugInApples(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('B')) {
//       let index = arr[i].indexOf('B');
//       return [i, index];
//     }
//   }
// }

// let output = findBugInApples([['A'], ['B']]);
// console.log(output); //[1, 0]

// output = findBugInApples([
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'B', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
//   ['A', 'A', 'A', 'A', 'A'],
// ]);
// console.log(output); //[1, 1]

// // 고차 함수
// function each(array, iterator) {
//   for (let i = 0; i < array.length; i++) {
//     iterator(array[i], i, array)
//   }
// }
// // 콜백 함수
// function printIterator(element, index, array) {
//   console.log(element, index, array)
// }

// each([1, 2, 3, 4, 5], printIterator)


// function readVertically(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let maxLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (maxLength < arr[i].length) {
//       maxLength = arr[i].length;
//     }
//   }

//   let result = '';
//   for (let i = 0; i < maxLength; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j][i] === undefined) {
//         continue;
//       }
//       result += arr[j][i];
//     }
//   }
//   return result;
// }


// let input = [
//   //
//   'hello',
//   'wolrd',
// ];
// let output = readVertically(input);
// console.log(output); // --> 'hweolllrod'

// input = [
//   //
//   'hi',
//   'wolrd',
// ];
// output = readVertically(input);
// console.log(output); // --> 'hwiolrd'


// // 문제
// function add(x, y) {
//   console.log(x, y);   // 2 3
//   return x + y;
// }

// add(2, 3);
// console.log(x, y)     // x is not defined


// 이상적인 함수는 한가지 일만 해야하며 가급적 크게 만들어야한다  // x(작게)
// function키워드 대신 화살표를 사용할 때 항상 익명함수를 사용해야한다. // o
// 함수선언문은 함수이름을 생략할 수 있다. // x

// 이름(name)을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 만들고 
// 매개변수로 전달받은 이름을 콘솔로그로 반환하게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”

// function greet(Name) {
//   console.log("안녕 내 이름은", Name, "야");
//   // return Name;
// }
// greet("plla2");
// // console.log("안녕 내 이름은", Name, "이야");
// const greet = (Name) => {
//   console.log(`안녕 내이름은 ${Name}`)
// }

// function modulo(num1, num2) {
//   // TODO: 여기에 코드를 작성합니다.
//   if (num2 === 0) { return 'Error: cannot divide by zero' }
//   if (num1 === 0) { return 0 };
//   while (num1 >= num2) {
//     num1 = num1 - num2
//   }
//   return num1
// }

// let output = modulo(25, 4);
// console.log(output); // --> 1

// function isIsogram(str) {
//   //빈 문자열을 입력받은 경우, true를 리턴
//   if (str.length === 0) {
//     return true;
//   }
//   //새로운 문자열 선언
//   let result = {};
//   //모두 소문자로 정리
//   let strLowered = str.toLowerCase();

//   for (let i = 0; i < strLowered.length; i++) {
//     if (result[strLowered[i]]) {
//       return false;
//     }
//     result[strLowered[i]] = true;
//   }

//   return true;
// }

// let output = isIsogram('aba');
// console.log(output); // false

// output = isIsogram('Dermatoglyphics');
// console.log(output); // true

// output = isIsogram('moOse');
// console.log(output); // false


// function numberSearch(str) {
//   let strLength = 0;
//   let sum = 0;

//   if (str.length === 0) return 0;

//   for (let i = 0; i < str.length; i++) {
//     let numbering = Number(str[i]);
//     if (isNaN(numbering)) strLength++;
//     else sum += numbering;
//   }

//   return Math.round(sum / strLength);

// }
// let output = numberSearch('Hello6 ');
// console.log(output); // --> 1

// output = numberSearch('Hello6 9World 2,');
// console.log(output); // --> 2

// output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
// console.log(output); // --> 2

// function computeSquareRoot(num) {
//   return Number((Math.pow(num, 0.5)).toFixed(2));
// }

// let output = computeSquareRoot(9);
// console.log(output); // --> 3

// output = computeSquareRoot(6);
// console.log(output); // --> 2.45

// 문제1: 
// 동일한 프로퍼티를 갖는 객체를 여러개 생성해야할때는 객체리터럴보다 객체생성자함수가 더 효율적이다. 
// (o)

// 생성자함수가 인스턴스를 생성하는 것은 옵션이고, 생성된 인스턴스를 초기화하는 것은 필수이다.
// (x)

// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 undefined이고,
//   new연산자 없이 일반함수로 호출된 함수 내부의 new.target은 함수 자신이다. 
//   (x)

// 문제2:
// const greet1 = Greet(15);

// console.log(greet1);  // undefined

// console.log(radius)  // 15

// // new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음.
// // 즉, 일반함수로 호출된다.

// // 일반함수로서 호출된 Greet은 반환문이 없기 때문에 undefined를 반환
// // 일반함수로서 호출된 Greet 내에서 this는 전역 객체를 가리킴.

// 문제3:
// function UserInfo(name, age, address) {
//   this.name = name;
//   this.age = age;
//   this.address = address;

//   return {
//     name="현승",
//     age=26,
//     address="광주",
//   }
// }

// let userInfo = new UserInfo('승현', 25, '서울');

// console.log(userInfo);
// console.log(userInfo instanceof UserInfo);

// {name: '현승', age:26}
// false

// 생성자함수에 return문이 존재하면, this대신 return문에 존재하는 값이 반환됨.
// 그러므로 instanceof 연산자를 사용하면 false가 나온다.

// function Product(name, price) {
//   this.name = name;
//   this.price = price

//   function val() {
//     price += price * 0.1
//   }
//   console.log(product1, val())
//   console.log(product2, val())
// }
// const product1 = new Product("shirts", 50000)
// const product2 = new Product("pants", 60000)


// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   this.vat = function () {
//     console.log(this.price * 0.1)
//   }
// }

// let product1 = new Product('shirts', 50000);
// let product2 = new Product('pants', 60000);
// console.log(product1)
// console.log(product2)

// function decryptCaesarCipher(str, secret) {
//   let newStr = '';
//   // str을 split으로 다 자른다.
//   let splitStr = str.split('')
//   // 자른 newStr에 for...of로 모든 배열들을 다 찾아서
//   for (let i of splitStr) {
//     // 만약 빈칸이면
//     if (i === ' ') {
//       // 빈칸을 넣고
//       newStr = newStr + ' '
//     } else {
//       // 만약 아스키 코드 표에서 소문자가 되는 97을 넘으면 맞으면, secret이동 후에 - 122(최대 숫자) 총 알파벳 갯수가 26개 니까 나머지에 122 더한다.
//       // 97보다 작으면, secret이동 후에 - 122 그리고 26 나눠서 나머지에 마찬가지 122 더한다.
//       newStr = newStr + String.fromCharCode((i.charCodeAt(0) > 97)
//         ? (i.charCodeAt(0) - secret - 122) % 26 + 122
//         : (i.charCodeAt(0) - secret - 122) % 26 + 122)
//     };
//   }
//   return newStr;
// }

// let output = decryptCaesarCipher('khoor', 3);
// console.log(output); // --> hello

// output = decryptCaesarCipher('zruog', 3);
// console.log(output); // --> world

// function compressString(str) {
//   // 연속되는 문자를 기록하기 위한 변수
//   // 첫 번째 문자로 초기화
//   let before = str[0];

//   // 동일한 문자의 반복 횟수
//   let count = 1;

//   // 정답으로 리턴할 문자열
//   let result = '';

//   // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
//   str = str + ' ';
//   for (let i = 1; i < str.length; i++) {
//     // 동일한 문자가 반복될 경우
//     if (before === str[i]) {
//       count++;
//     } else {
//       // 이전과 다른 문자일 경우,
//       // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
//       if (count >= 3) {
//         result = result + `${count}${before}`;
//       } else {
//         result = result + before.repeat(count);
//       }
//       before = str[i];
//       count = 1;
//     }
//   }

//   return result;
// }

// let output = compressString('abc');
// console.log(output); // --> abc

// output = compressString('wwwggoppopppp');
// console.log(output); // --> 3wggoppo4p

// function fibonacci(num){
//   if(num<=1) return num;
//   return fibonacci(num-1) + fibonacci(num-2)
// }

// function findMatryoshka(matryoshka,size){
//   if(matryoshka.size===size) return true;
//   if(matryoshka.matryoshka) return findMatryoshka(matryoshka.matryoshka,size)
//   return false;
// }

// function unpackGiftbox(giftBox, wish) {
//   // TODO: 여기에 코드를 작성합니다.
//   for (let i = 0; i < giftBox.length; i++) {
//     if (giftBox[i] === wish) return true;
//     else if (Array.isArray(giftBox[i])) {
//       if (unpackGiftbox(giftBox[i], wish) === true) return true;
//     }
//   }
//   return false;
// }


// 스터디 비동기 문제

//문제 1

// function foo(){
//   console.log('foo');
// }
// function bar(){
//   console.log('bar');
// }

// setTimeout(foo,0);
// bar();

// 1. 전역코드가 평가되어 전역 실행 컨텍스트가 생성되고 콜스택에 푸시된다
// 2. 전역코드가 실행되기 시작하여 setTimeout 함수가 호출된다. 이때 setTimeout 함수의 함수 실행 컨텍스트가 생성되고,
// 콜스택에 푸쉬되어 현재 실행중인 실행 컨텍스트가 된다
// 3. setTimeout 함수가 실행되면 콜백 함수를 호출 스케줄링하고 종료되어 콜스택에 팝된다. 이때 호출 스케줄링, 즉
// 타이머 설정과 타이머가 만료되면 콜백함수를 태스크 큐에 푸시하는 것은 자바스크립트엔진의 역할이다. (x 브라우저의 역할)
// 4-1과 4-2는 병행처리된다.
// 4-1. 이후 타이머가 만료되면 콜백 함수 foo가 태스크 큐에 푸쉬된다. 이 처리는 브라우저가 수행한다.
// 4-2. bar 함수가 호출되어 bar 함수의 함수 실행 컨텍스트가 생성되고 콜스택에 푸시되어 현재 실행중인 실행 컨텍스트가 된다. 이후 bar함수가 종료되어 콜스택에서 팝된다.
// 5. 전역 코드 실행이 종료되고 전역 실행 컨텍스트가 콜스택에서 팝된다. 하지만 콜스택에는 실행 컨텍스트가 존재한다.(x, 아무런 실행 컨텍스트가 존재하지않음)
// 6. 이벤트 루프에 의해 콜스택이 비어있음이 감지되고, 태스크 큐에서 대기중인 콜백함수 foo가 이벤트 루프에 의해 콜스택에 푸시된다. 


// 문제 2
// JSON.stringify , JSON.parse 각각 직렬화? 역직렬화?
// 자바스크립트가 싱글스레드로 동작하는 것은 브라우저에 내장된 자바스크립트의 엔진이 아니라 브라우저에서 동작하는 것이다.
// 요청메서드 5가지 중 페이로드 유,무가 틀린 것은?
// GET : X 
// POST : O
// PUT : X
// PATCH : X
// DELETE : X

// 문제3
// 1. 힙 2. 콜스택 3. 태스크 큐 4. Web API

// function prepareOne() {
//   let start = new Date().getTime();
//   console.log('일을 마쳤습니다.')
//   while (new Date().getTime() < start + 333) { }
// }

// console.log("Start Job!");
// prepareOne();
// prepareOne();
// prepareOne();
// console.log("Finish Job!");

// const arr = [1, 2, 3, 4, 5];

// function arrSum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   return (arr.shift() + arrSum(arr));
// }
// console.log(arrSum(arr))

// restAPI 스터디 문제

// 1. REST의 특징의 설명이 맞는지 틀린지 고르시오
// 1-1 캐시사용을 통해 REST Server 트랜잭션이 발생하기 때문에 전체 응답시간, 성능, 서버의 자원 이용률을 향상
// 1-2 RESTAPI 사용을 위해 별도의 인프라를 구축해야한다.
// 1-3 HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용 가능하다.
// 1-4 서버와 클라이언트의 역할을 명확하게 분리한다.

// 1번 답: X X O O 
// 1번설명 : 캐시 사용을 통해 REST Server 트랜잭션이 발생하지 않기때문에 전체 응답시간, 성능, 서버의 자원이용률이 향상된다.
// 트랜잭션은 데이터베이스의 상태를 변환시키는 하나의 논리적 기능을 수행하기 위한 작업의 단위
// 2번설명 : HTTP 프로토콜의 인프라를 그대로 사용하므로 RESTAPI 사용을위한 별도의 인프라를 구축할 필요없음

// 2. 다음 중 RESTAPI 설계 기본규칙 중 잘못된것을 모두 고르고 간단한 이유를 쓰세요.
// 2-1 http://myblog.com/test/
// 2-2 http://myblog.com/delete-posts/123
// 2-3 http://myblog.com/test-blog
// 2-4 http://myblog.com/posts/123

// 2번 답: 2-1 : 맨뒤에 /를 빼야함, 2-2 : 행위를 표현하면 안되기에 delete쓰면안됨


// 3. 응답상태 코드와 설명을 알맞게 짝지으세요
// 1xx, 2xx, 3xx, 4xx, 5xx
// 클라이언트는 요청을 완료하기 위해 추가적인 행동을 취해야함.
// 서버쪽 오류로 인한 상태코드.
// 클라이언트 요청이 성공적으로 수행됨.
// 전송 프로토콜 수준의 정보 교환.
// 클라이언트의 잘못된 요청.

// 3번 답 : 순서대로 3xx, 5xx, 2xx, 1xx, 4xx

// let output = bubbleSort([2, 1, 3]);
// console.log(output);

// const bubbleSort = function (arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   for (let i = 0; i < arr.length; i++) {
//     let swap;
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//     }
//     if (!swap) {
//       break;
//     }
//   }
//   return arr;
// };

// 프로미스 문제
// 1번문제
// 1-1. Promise.all 메서드는 여러개의 비동기처리를 모두 병렬처리할때 사용하며,
// Promise.all(수행할일1,수행할일2,수행할일3)로 작성하면된다.

// 1-2. fetch함수에서 잘못된 url이 지정되면 catch문에서 프로미스를 reject한다.
// fetch(url)
//   .then(() => console.log('okay'))
//   .catch(() => console.log('error'))

// 1-3. Promise.all과 Promise.allSettled의 차이는
// Promise.all은 메서드가 하나라도 실패해도 모든 promise들의 결과를 받을 수 있다,
// 하지만 Promise.allSettled는 하나라도 실패하면 그 이후의 promise들의 결과는 무시하고 바로 에러로 빠져버린다. 

// 1-4. async 코드 최적화에서 await은 Promise가 끝날때까지 기다리면서,
// 끝나면 resolve에서 값만 추출해 반환한다.


// 1번문제 답 XXXO
// 1-1 Promise.all([수행할일1, 수행할일2, 수행할일3])로 작성해야함.
// 1-2 fetch 함수는 HTTP에러가 발생해도 에러를 reject를 하지않고 불리언타입의 ok 상태를 false로 설정한 response를 resolve한다.
// 1-3 Promise.all은 하나라도 실패하면 그 이후의 promise들의 결과는 무시하고 바로 에러로 빠져버린다.
// 하지만 Promise.allSettled는 메서드가 하나라도 실패해도 모든 promise들의 결과를 받을 수 있다

// 2번문제
// 콘솔에 찍힐답을 예상해보고 문제점을 해결해보세요 !
// function buy(item, price, quantity) {
//   console.log(item + "상품을" + quantity + "개를 골라서 점원에게 주었습니다.");

//   setTimeout(() => {
//     console.log("계산할 시간이 필요합니다.");
//     let total = price * quantity;
//     return total;
//   }, 1000)
// }

// function pay(tot) {
//   console.log(tot + "원을 지불하였습니다.")
// }

// pay((buy("공기청정기", 10000, 5)));

// 2번 답: 공기청정기상품을5개를 골라서 점원에게 주었습니다.
// undefined원을 지불하였습니다.
// 계산할 시간이 필요합니다.
// function buy(item, price, quantity) {
//   console.log(item + "상품을" + quantity + "개를 골라서 점원에게 주었습니다.");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("계산할 시간이 필요합니다.");
//       let total = price * quantity;
//       resolve(total);
//     }, 1000)
//   })
// }

// function pay(tot) {
//   console.log(tot + "원을 지불하였습니다.")
// }

// buy("공기청정기", 10000, 5).then(n => pay(n));


// 문제 3
// function delay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), 1000);
//   })
// }

// async function getApple() {
//   await delay();
//   return "apple";
// }

// async function getBanana() {
//   await delay();
//   return "banana";
// }

// function getFruites() {
//   getApple()
//     .then((a) => {
//       getBanana()
//         .then((b) => console.log(`${a} and ${b}`));
//     }) // 콜백지옥

// }

// getFruites();

// 3번문제 답:
// 결과: apple and banana
// delay()라는 프로미스 객체 비동기 함수를 만들고,
//   각 async함수 getApple, getBanana에서 동기처리를 한다.
// 리턴값이 곧 resolve()니까 then 가능

// // let set = new Set(["A", "C", "B", "A", "c"]);
// // console.log(set);// Set { 'A', 'B', 'C', 'c' }

// function setTimeoutPromise(ms) {
//   //promise 객체를 반환
//   //ms만큼 기다린후 Promise를 resolve합니다.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// }
// //위의 코드는 수정하지 마세요!

// async function fetchAge(id) {
//   await setTimeoutPromise(1000);
//   //해당 promise 객체가 resolve 상태가 될때까지 기다립니다.
//   //fetchAge 함수를 10번 호출하는데에 10초 정도 걸립니다.
//   console.log(`${id} 데이터 받아오기 완료!`);
//   return parseInt(Math.random() * 20, 10) + 25;
// }
// //위의 코드는 수정하지 마세요!

// async function startAsyncJobs() {
//   let ages = [];
//   for (let i = 0; i < 10; i++) {
//     let age = fetchAge(i);
//     //위의 코드에서 await을 지우고 promise.all을 사용해서 코드 동작시간을 1초로 줄여보세요
//     ages.push(age);
//   }

//   //todo : promise.all을 사용할것
//   let promises = Promise.all([fetchAge(), startAsyncJobs()]).then(console.log(promises))

//   console.log(
//     //밑에 있는 변수명을 적절하게 변경해주세요.
//     `평균 나이는? ==> ${ages.reduce((prev, current) => prev + current, 0) / ages.length
//     //reduce문을 활용하여 평균값을 구하는 고차함수입니다.
//     }`
//   );
// }

// startAsyncJobs();


// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {

//   // ...코드...
//   // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
//   // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
// }

// f();

// 이터러블 문제
// 문제 1
// 평범한 객체 range를 이터러블 객체로 만들때 빈칸에 알맞은것을 쓰고, 
// 무엇이 이터러블객체이고, 이터레이터인지 쓰시오.
// let range = {
//   승현: 10,
//   나: 20
// };

// range[Symbol.iterator] = function () {
//   return {
//     정승현: this.승현,
//     나는나: this.나,

//     next() {
//       if (this.정승현 <= this.나는나) {
//         return { done: false, value: this.정승현++ };
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }

// 1번 답: 768~773 function() 전까지가 이터러블객체,
// return{ 부터 785번 } 까지 이터레이터

// 2번문제

// 2 - 1 : 다양한 데이터 소스가 각자의 순회 방식을 갖는다면 데이터 소비자는
//       다양한 데이터 소스의 순회방식을 모두 지원하기때문에 효율적이다.

// 2 - 2 : 일반 객체는 이터러블이 아니다.

// 2 - 3 : iterator는 무조건 next라고 하는 메서드를 가져야한다.

// 2번 답: xoo
// 2 - 1 비효율적이다. 


// 3번 문제
// 다음 6개의 문장 중 각각 이터러블과 이터레이터에 해당하는 설명을 나누시오

// 랜덤 Access가 가능하다.
// 기능이 배열에 비해 상대적으로 적다
// 기능이 많다
// 메모리 사용량이 많다
// 메모리 사용이 효율적이다
// next메서드, 바로 앞 / 뒤 값만 가져올 수 있다.

//   이터러블: 1, 3, 4
// 이터레이터: 2, 5, 6

// let arr = [1, 3, 4, 6, 5]
// arr = arr.sort((a, b) => b - a)
// console.log(arr)

// 문제1
// const myTeam = ['은희', '근실', '찬우', '민재'];
// const myObject = { ...myTeam };
// console.log(myTeam)
// console.log(myObject)

// 1번 답
// ['은희', '근실', '찬우', '민재']
// { '0': '은희', '1': '근실', '2': '찬우', '3': '민재' }

// 문제2
// let myInfo = {
//   name: "승현",
//   age: 25,
//   gender: 'male',
//   job: undefined,
// }
// let { name = "정승현", age, gender, job = 'developer' } = myInfo;
// console.log(myInfo)

// 2번 답
// { name: '승현', age: 25, gender: 'male', job: undefined }
// 객체로부터 받은값이 undefined일때만 기본값이 사용됨.

//   문제3
// 이터러블이면서 유사배열객체면 스프레드를 사용할 수 있다.
// Set은 순서가 보장되지 않고 중복을 허용하지 않는다. 
// Map은 순서가 보장되지 않고 Key중복은 허용하지 않지만 value의 중복은 허용한다.

// 3번 답
// ooo

// 브라우저 랜더링 문제
1.
리플로우 최적화 방법
1 - 1. 사용하지 않는 노드에는 display:none 보다는 visibility:invisible을 사용한다.
1 - 2. width, height 등보다는 transform을 사용한다.
1 - 3. 애니메이션이 들어간 코드는 position: fixed, position:absolute로 지정해 전체 노드에서 분리시킨다.

1 답: XOO
1 - 1: visibility invisible 은 레이아웃 공간을 차지하기 때문에 reflow 의 대상이 된다.하지만 display none 은 Layout 공간을 차지하지 않아 Render Tree 에서 아예 제외된다.
1 - 2: 또한 Reflow Repaint가 일어나지 않는 transform, opacitiy와 같은 속성도 있습니다.따라서 left, right, width, height 보다 transform을, visibility / display 보다 opacitiy를 사용하는 것이 성능 개선에 도움이 됩니다.
1 - 3: position absolute 또는 fixed 를 사용해, 영향을 받는 주변 노드를 줄일 수 있다.애니메이션이 들어간 코드는 가급적 position: fixed, position:absollute 로 지정해 전체 노드에서 분리시킨다.

2. 브라우저 렌더링 과정의 순서를 맞추시오

1. 브라우저 JS엔진은 받아온 JS를 파싱해 AST를 생성하고, 바이트코드로 변환해 실행
2. 화면에 HTML요소를 페인팅
3. 브라우저 HTML, CSS, JS, 이미지 등 리소스를 서버에 요청하고, 응답으로 받아옴
4. 브라우저 렌더링 엔진은 받아온 HTML, CSS를 파싱해 DOM, CSSOM을 생성하고, 이를 결합해 렌더 트리를 생성
5. 렌더트리를 기반으로 HTML 요소의 레이아웃을 계산

2 답: 3 4 1 5 2

3. DOM은 문서 객체모델이라고 한다. 1. ? 를 2. ? 로 바꾼 모델이다.
JS엔진은 js파일의 코드를 3. ? 단위로 분해한다.이렇게 분해된 것에 문법적인 의미와 구조가 더해져, 4. ? 라는 트리가 완성됨.

1. 문서 2.객체 3. 토큰 4. AST