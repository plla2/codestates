/*

fetch("plla2.txt").then((res) => {
  res.text().then((text) => {
    console.log(text);
  })
})

*/


/*

let promise = fetch("plla2.txt").then((res) => { // res는 성공, 실패를 가지고 있는 아주 중요한 객체
  res.text().then((data) => {   // 9번 라인의 res의 데이터를 10번 라인의 res로 보내준다. res.text()는 달라고한 데이터의 결과를 문자로 변형해주는 함수
    // 그 문자로 변형된 데이터를 then이라는 후속 메서드를 통해 변수data로 다시 받는다.
    alert(data);
  });
})

*/

/*

fetch("plla2.json").then((res) => {
  res.json().then((data) => { // 위의 예시와 다르게 text 대신 json을 해줌으로써 데이터를 json형식으로 바꿔준다.
    console.log(data)   // data는 객체형태로 반환이 된다.
    console.log(data.id) // 객체안에서의 특정 값을 받고싶을땐 이렇게 닷(.)을 사용하여 받아온다.
    console.log(data.name)
  })
})

*/


fetch("plla2.json").then((res) => {
  return res.json()   // 위의 코드를 가독성 좋게 json형식으로 바꾼 결과를 return으로 실어줄 수 있다.
}).then((data) => {
  return data.id    // 받은 data중에 id만 꺼내서 리턴해줄 수도 있음.
}).then((data) => {
  console.log(data)  // 결과 : plla2
})