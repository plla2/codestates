const fs = require("fs");
const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

// HINT: getDataFromFilePromise(user1Path) 및 getDataFromFilePromise(user2Path)를 이용해 작성합니다
const readAllUsersChaining = () => {
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  let result = [];
  return getDataFromFilePromise(user1Path)
    .then((value) => { // value = {user1정보}가 전달인자로 들어감.
      let parsed1 = JSON.parse(value); // 파싱시키고
      result.push(parsed1) // result에 푸쉬, result = [{user1정보}]인 상태
      return getDataFromFilePromise(user2Path); // 다시 함수를 실행시켜 user2의 정보를 전달인자로 넘긴다.
    })
    .then((value) => {
      let parsed2 = JSON.parse(value);
      result.push(parsed2)
      return result
    })
}

readAllUsersChaining();

module.exports = {
  readAllUsersChaining
}