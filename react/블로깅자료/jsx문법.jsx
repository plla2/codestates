// import { func } from "prop-types"

// // 실제 작성 JSX
// function App() {
//   return (
//     <h1>Hello~ I am 승현</h1>
//   )
// }

// // 위와 같이 작성하면 , 바벨이 아래와 같이 JS로 해석함.
// function App() {
//   return React.createElement("h1", null, "Hello~ I am 승현")
// }


// // 에러 케이스
// function App() {
//   return (
//     <div>Hello</div>
//     <div>I am 승현</div>
//   )
// }

// // 정상 케이스
// function App() {
//   return (
//     <>
//       <div>Hello</div>
//       <div>I am 승현</div>
//     </>
//   )
// }


// function App() {


//   const plla2 = {
//     name: '승현',
//     age: 25,
//     hobby: "coding", "bowling"
//     }
//   return (
//     <>
//       <div>Hello</div>
//       <div>{plla2.name}</div>  // 승현
//       <div>{plla2.hobby}</div> // coding, bowling
//     </>
//   )
// }

// // 외부에서 if문을 사용
// function App() {
//   let info = '';
//   const logIn = "Y";
//   if (logIn === "Y") {
//     info = <div>Plla2 입니다!!</div>
//   } else {
//     info = <div>비회원 입니다!!</div>
//   }
//   return (
//     <>
//       {info};
//     </>
//   )
// }


// // 내부에서 삼항연산자 사용
// function App() {
//   const logIn = "Y";
//   return (
//     <>
//       <div>
//         {logIn === "Y" ? ( <div>Plla2 입니다!!</div> ) : (<div>비회원 입니다!!</div>)}
//       </div>
//     </>
//   );
// }

// function App() {
//   const style = {
//     backgroundColor: "blue",
//     fontSize: '20px'
//   }
//   return (
//     <div style={style}>Hello! 승현!!</div>
//   )
// }

// function App(){
//   const style={
//     backgroundColor: 'blue',
//     fontSize:"20px"
//   }
//   return(
//     <div className="exClass">Hello! 승현!!</div>
//   )
// }

function App() {
  return (
    <>
      <div>
        <div
        // 주석 이렇게도 사용가능 !!
        >Hello! 승현!!</div>
      </div>
    </>
  );
}