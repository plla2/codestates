const express = require('express')
const app = express()
const port = 3000

const database = [
  { id: 1, title: '글1' },
  { id: 2, title: '글2' },
  { id: 3, title: '글3' },
]

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/database', (req, res) => {
  res.send(database);
})

app.get('/database/:title', (req, res) => {
  const title = req.params.title;
  database.push({
    id: database.length + 1,
    title,
  })
  res.send("값 추가가 완료되었습니다.");
})

app.post('/add-database', (req, res) => {
  const title = req.body.title;
  database.push({
    id: database.length + 1,
    title,
  })
  res.send("값 추가가 완료되었습니다.");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})