const display1E1 = document.querySelector(".display-1");
const display2E1 = document.querySelector(".display-2");
const tempResultE1 = document.querySelector(".temp-result");
const numbersE1 = document.querySelectorAll(".number");
const operationE1 = document.querySelectorAll(".operation");
const equalE1 = document.querySelector(".equal");
const clearAllE1 = document.querySelector(".all-clear");

//출력할 값 담을 변수
let display1Num = "";
let display2Num = "";
let result = null;

//기호를 담을 변수
let lastOperation = "";

//중복 체크할 변수
let haveDot = false;

// 숫자 클릭 이벤트
numbersE1.forEach((number) => {
  number.addEventListener("click", (e) => {
    // .의 중복체크 부분
    console.log(e);
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    // 클릭한 숫자값 변수에 넣고 변수 값을 출력
    display2Num += e.target.innerText;
    display2E1.innerText = display2Num;
  });
});

// 연산자 클릭 이벤트
operationE1.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    // 기호 앞에 아무값도 없을 경우 아무것도 실행할 수 없다.
    if (!display2Num) {
      return;
    }
    // 기호 다음 두번째 값은 .을 다시 사용할 수 있어야함
    haveDot = false;
    // 클릭한 기호를 변수에 넣음
    const operationSymbol = e.target.innerText;
    // 첫번째 값과 두번째 값 그리고 기호가 모두 있을때
    if (display1Num && display2Num && lastOperation) {
      mathOperation();
    } else {
      // 하나라도 없을 경우 입력값을 임시 출력 결과창에 사용할 변수에 숫자로 변환 후 담아둠
      result = parseFloat(display2Num);
    }
    clearVar(operationSymbol);
    lastOperation = operationSymbol;
  });
});

// 첫번째 입력 숫자와 기호를 합쳐 출력하는 함수 및 임시 결과창에 값 출력
function clearVar(symbol = "") {
  display1Num += `${display2Num} ${symbol}`;
  display1E1.innerText = display1Num;
  display2E1.innerText = "";
  display2Num = "";
  // 임시 결과창에 저장한 값 출력
  tempResultE1.innerText = result;
}
function mathOperation() {
  if (lastOperation === "×") {
    result = parseFloat(result) * parseFloat(display2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(display2Num);
  } else if (lastOperation === "−") {
    result = parseFloat(result) - parseFloat(display2Num);
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(display2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(display2Num);
  }
}

equalE1.addEventListener("click", (e) => {
  // 첫번째 값 혹은 두번째 값이 없을 경우는 계산 불가하여 아무것도 하지 않음
  if (!display1Num || !display2Num) {
    return;
  }
  //둘 다 값이 있을 경우
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  display2Num = result;
  display1Num = "";
});

// all clear(AC) click Event
clearAllEl.addEventListener("click", (e) => {
  // 모든 값 초기화
  display1El.innerText = "0";
  display2El.innerText = "0";
  display1Num = "";
  display2Num = "";
  result = "";
  tempResultEl.innerText = "0";
  haveDot = false;
});

// ------------------------------------ window keydown Event ------------------------------------
window.addEventListener("keydown", (e) => {
  // 누른 키의 값을 받아와 각 종류 별 매칭되는 클릭과 연결
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "/" || e.key === "%") {
    clickOperation(e.key);
  } else if (e.key === "*") {
    clickOperation("×");
  } else if (e.key === "-") {
    clickOperation("−");
  } else if (e.key === "?") {
    clickOperation("÷");
  } else if (e.key === "Enter" || e.key === "=") {
    ClickEqual();
  }
});

// 숫자 클릭
function clickButtonEl(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// 기호 클릭
function clickOperation(key) {
  operationEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function ClickEqual() {
  equalEl.click();
}
