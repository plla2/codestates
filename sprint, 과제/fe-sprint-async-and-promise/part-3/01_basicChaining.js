
const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다
  const obj = {}
  return fetch('http://localhost:4999/data/latestNews')
    .then((res) => res.json())
    .then((newsdata) => {
      obj.news = newsdata.data
      return fetch('http://localhost:4999/data/weather')
    })
    .then((res2) => res2.json())
    .then((weatherdata) => {
      obj.weather = weatherdata
      return obj;
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather
  }
}


