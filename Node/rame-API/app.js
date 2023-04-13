const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const database = [
  { id: 1, title: "글1" },
  { id: 2, title: "글2" },
  { id: 3, title: "글3" },
]

// index.html 파일 불러오기
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// database 응답 받아오기
app.get('/database', (req, res) => {
  res.send(database)
})

// params를 이용하여 특정값만 응답받아오기
app.get('/database/:id', (req, res) => {
  const id = req.params.id
  const data = database.find((el) => el.id === Number(id))
  res.send(data)
})

// url을 통해 생성, 수정, 삭제 
app.post('/add-database', (req, res) => {
  const title = req.body.title
  database.push({
    id: database.length + 1,
    title,
  })
  res.send('값 추가 완료')
})

app.post('/update-database', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  database[id - 1].title = title
  res.send('값 수정 완료')
})

app.post('/delete-database', (req, res) => {
  const id = req.body.id
  database.splice(id - 1, 1);
  res.send('값 삭제 완료')
})

// HTTP 메서드를 사용한 생성, 수정 ,삭제
app.post('/database', (req, res) => {
  const title = req.body.title
  database.push({
    id: database.length + 1,
    title,
  })
  res.send('값 추가 완료')
})

app.put('/database', (req, res) => {
  const id = req.body.id
  const title = req.body.title
  database[id - 1].title = title
  res.send('값 수정 완료')
})

app.delete('/database', (req, res) => {
  const id = req.body.id
  database.splice(id - 1, 1);
  res.send('값 삭제 완료')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})