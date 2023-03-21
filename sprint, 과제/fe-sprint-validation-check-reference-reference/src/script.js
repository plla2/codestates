const elInputUsername = document.querySelector('#username')
const elFailureMessage = document.querySelector('.failure-message')
const elSuccessMessage = document.querySelector('.success-message')
const elInputPassword = document.querySelector('#password')
const elInputPasswordRetype = document.querySelector('#password-retype')
const elMismatchMessage = document.querySelector('.mismatch-message')

function isMoreThan4Length(value) {
  return value.length >= 4
}

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    // console.log('충분함')
    elSuccessMessage.classList.remove('hide')
    elFailureMessage.classList.add('hide')
  }
  else {
    // console.log('짧음')
    elSuccessMessage.classList.add('hide')
    elFailureMessage.classList.remove('hide')
  }
}

function isMatch(password1, password2) {
  return password1 === password2
}

elInputPasswordRetype.addEventListener('keyup', () => {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    // console.log('비밀번호 일치')
    elMismatchMessage.classList.add('hide')
  }
  else {
    // console.log('비밀번호 불일치')
    elMismatchMessage.classList.remove('hide')
  }
})
