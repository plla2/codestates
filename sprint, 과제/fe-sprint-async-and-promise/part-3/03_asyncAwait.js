async function getNewsAndWeatherAsync() {
  // TODO: async/await 키워드를 이용해 작성합니다
  const a = await fetch('http://localhost:4999/data/latestNews').then((res) => res.json())
  const b = await fetch('http://localhost:4999/data/weather').then((res2) => res2.json())
  return { news: a.data, weather: b }

}
if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeatherAsync
  }
}
