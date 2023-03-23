function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  const obj = {}
  const news = fetch('http://localhost:4999/data/latestNews').then((res) => res.json())
  const weather = fetch('http://localhost:4999/data/weather').then((res2) => res2.json())

  return Promise.all([news, weather])
    .then((arr) => {
      obj.news = arr[0].data;
      obj.weather = arr[1];
      return obj;
    })
}

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAll
  }
}
