const express = require("express");
const app = express();

// // app.use가 미들웨어가 아니라 app.use()의 인자안의 콜백함수가 미들웨어이다.
// app.use((req, res, next) => {
//   req.Times = Date.now(); // req라는 객체에 Times라는 키와 밸류를 래퍼로 등록한다. 키값은 자유롭게가능
//   next(); // 다음 미들웨어 함수를 작동.
// });

// // app.get이 미들웨어가 아니라 app.get()의 인자안의 콜백함수가 미들웨어
// app.get('/', (req, res) => { // 위의 미들웨어함수에서 next()가 호출되면 이 콜백함수가 작동
//   res.send(req.Times);  // 위의 미들웨어에서 Times 객체를 등록했기 때문에 호출해서 데이터를 사용할 수 있음
// })

// app.listen(3000);

// const express = require('express');


// /* 1. 앱을 만든다. */
// const app = express();


// /* 2. 앱에 관련 설정 속성들을 만든다. */
// app.set('port', 3000);


// /* 3. 공통 미들웨어를 만든다. */
// app.use((req, res, next) => {
//   console.log('모든 요청에 다 실행됩니다.');
//   // next라는 세 번째 매개변수는 다음 미들웨어로 넘어가는 함수이다.
//   // next를 실행하지 않으면 다음 미들웨어가 실행되지 않는다.
//   next();
// })


// /* 4. 라우터들을 만든다. */

// // /error 요청 올때 동작
// app.get('/error', (req, res, next) => {
//   next(); // next()에 인수가 없다면, 바로 다음 미들웨어 함수로 넘어가게 된다. 

// }, (req, res) => { // 미들웨어를 여러개 넣어줘도 된다. 위에서 next()되면 실행 된다.
//   try {
//     // .. 에러 발생 코드
//   } catch (err) {
//     error(err); // next()에 인수가 있다면, 에러 처리 미들웨어로 점프하게 된다. 
//   }
// });

// // /about 요청 올때 동작
// app.get('/about', (req, res) => {
//   res.send('Hello, about');
// });

// // 주소 부분에는 정규표현식, : (콜론)을 사용한 와일드 카드도 적용이 가능하다 :변수명 정도로 생각하면 된다.
// // 와일드 카드를 사용할때는 다른 라우터 보다 뒤에 적어주는 것이 좋다
// app.get('/category/:name', (req, res) => {
//   res.send(`Hello, ${req.params.name}`);
// });

// // 모든 종류의 get요청이 올때 동작
// app.get('*', (req, res) => {
//   res.send('Hello, 승현 !!');
// });

// // post 요청 올때 동작
// app.post('/', (req, res) => {
//   res.status(200).send('Hello, 승현 ~~');
// });


// /* 5. 에러 처리 미들웨어를 만든다. */
// app.use((err, req, res, next) => { // 에러 미들웨어는 인자는 반드시 4개 선언
//   console.error(err);
//   res
//     .status(500)
//     .send(err.message);
// })


// /* 6. 포트를 연결하여 서버를 실행한다. */
// app.listen(app.get('port'), () => {
//   console.log(app.get('port'), '번 포트에서 대기 중.');
// });

// app.get('/error', (req, res, next) => {
//   next(); // next()에 인수가 없으면, 바로 다음 미들웨어 함수로 넘어감
// }, (req, res) => {
//   try {
//     // 에러가 발생되는 코드를 친다고 생각해보자
//   } catch (err) {
//     next(err); // next()에 인수가 있다면, 에러처리 미들웨어로 점프
//   }
// })

// // 에러처리 미들웨어 함수가 콜백으로 들어감
// app.use((err, req, res, next) => {
//   console.err(err);
//   res.status(404).send(err.message);
// })

// app.get('/', (req,res,next)=>{
//   if(false){
//     next();  // 다음 미들웨어로 넘어감
//   }else{
//     next('route');  // next()에 'route'인수를 주게되면, 다음 미들웨어가 아닌, 다음 라우터로 넘어감.
//   }
// }, (req,res)=>{
//   // ... 이구문은 next()면 실행되지만,
//   // ... next('route')이기 때문에 실행되지않는다.
// });

// app.get('/',(req,res,next)=>{
//   // ... next('route')면, 그 다음 라우터인 여기가 실행된다.
// })

app.use((req, res, next) => {
  req.data = "새로운 데이터";
  next();  // next하면 다음 미들웨어에 req객체가 인자로 들어가게 됨
}, (req, res, next) => {
  //  따라서 위에서 추가한 키와 밸류를 사용할 수 있게 됨
  console.log(req.data); // 새로운 데이터
})

// 사용자가 custom 이라는 미들웨어를 만들었다.
function custom(req, res, next) {
  const na = "승현";
  console.log(`Hello ${na}`);

  req.my = na;  // 사용자가 미들웨어에서 객체 키를 my, 값을 na로 생성했다
  next();  // req데이터를 저장한채 그대로 다음 미들웨어로 보냄
}