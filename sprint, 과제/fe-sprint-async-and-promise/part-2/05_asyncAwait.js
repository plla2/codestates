const path = require('path');
const { getDataFromFilePromise } = require('./02_promiseConstructor');

const user1Path = path.join(__dirname, 'files/user1.json');
const user2Path = path.join(__dirname, 'files/user2.json');

const readAllUsersAsyncAwait = async () => {
  // TODO: async/await 키워드를 이용해 작성합니다
  try {
    const user1 = await getDataFromFilePromise(user1Path);
    const user2 = await getDataFromFilePromise(user2Path);

    return [JSON.parse(user1), JSON.parse(user2)]
  }
  catch (err) {
    console.log(err)
  }
}

// readAllUsersAsyncAwait();

module.exports = {
  readAllUsersAsyncAwait
}