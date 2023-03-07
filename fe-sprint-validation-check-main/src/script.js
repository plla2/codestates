// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector("#username");

let elFailureMessage = document.querySelector(".failure-message");

let elSuccessMessage = document.querySelector(".success-message");

let elInputpass = document.querySelector("#password");

let elInputpassre = document.querySelector("#password-retype");

let mismatch = document.querySelector(".mismatch-message");

let mismatch2 = document.querySelector(".failure-message2");
// elFailureMessage.classList.remove("hide");

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
    elSuccessMessage.classList.remove("hide");
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
  }
  mismatch.classList.add("hide");
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

// 주석을 제거하고, 유효성 검증 함수를 테스트 해보세요

// console.log('`codestates`는 영어만 포함하므로', onlyNumberAndEnglish('codestates'))
// console.log('`김coding`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('김coding'))
// console.log('`김코딩`은 영어 외의 다른 글자도 포함하므로', onlyNumberAndEnglish('김코딩'))
// console.log('`qwerty`는 충분히 강력하지 않은 암호이므로', strongPassword('qwerty'))
// console.log('`q1w2e3r4`는 특수문자를 포함하지 않으므로', strongPassword('q1w2e3r4'))
// console.log('`q1w2e3r4!`는 조건을 충족하므로', strongPassword('q1w2e3r4!'))
