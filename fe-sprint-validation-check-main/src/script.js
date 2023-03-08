// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username");

let elFailureMessage = document.querySelector(".failure-message");

let elSuccessMessage = document.querySelector(".success-message");

let elInputpass = document.querySelector("#password");

let elInputpassre = document.querySelector("#password-retype");

let mismatch = document.querySelector(".mismatch-message");

let mismatch2 = document.querySelector(".failure-message2");

let strong = document.querySelector(".strong-pass");

let signBtn = document.querySelector(".signup");

elInputUsername.addEventListener("keyup", () => {
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공메세지가 보여야함.
    elSuccessMessage.classList.remove("hide");
    // 실패메세지가 가려져야함.
    elFailureMessage.classList.add("hide");
  } else {
    // 성공메세지가 가려져야 함.
    elSuccessMessage.classList.add("hide");
    // 실패 메세지가 보여야함.
    elFailureMessage.classList.remove("hide");
  }
  if (onlyNumberAndEnglish(elInputUsername.value)) {
    // elSuccessMessage.classList.remove("hide");
    mismatch2.classList.add("hide");
  } else {
    elSuccessMessage.classList.add("hide");
    mismatch2.classList.remove("hide");
  }
});
function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

elInputpass.addEventListener("keyup", (e) => {
  let password1 = e.target.value;
  let password2 = elInputpassre.value;
  if (!isMatch(password1, password2)) {
    mismatch.classList.remove("hide");
    return;
  } else if (isMatch(password1, password2)) {
    mismatch.classList.add("hide");
  }
  if (!strongPassword(elInputpass.value)) {
    strong.classList.remove("hide");
    return;
  }
  strong.classList.add("hide");
});

elInputpassre.addEventListener("keyup", (e) => {
  if (!strongPassword(elInputpassre.value)) {
    strong.classList.remove("hide");
    return;
  }
  strong.classList.add("hide");
});

elInputpassre.addEventListener("keyup", (e) => {
  let password2 = e.target.value;
  let password1 = elInputpass.value;
  if (!isMatch(password1, password2)) {
    mismatch.classList.remove("hide");
    return;
  }
  mismatch.classList.add("hide");
});

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

signBtn.addEventListener("click", (e) => {
  if (
    isMoreThan4Length(elInputUsername.value) &&
    onlyNumberAndEnglish(elInputUsername.value) &&
    strongPassword(elInputpass.value) &&
    strongPassword(elInputpassre.value)
  ) {
    alert("ㅎㅇ");
  } else {
    alert("ㅂㅇ");
  }
  window.location.reload();
});
