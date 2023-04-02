import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css"
import { useRef, useState } from "react";

// const dummyList = [
//   {
//     id: 1,
//     author: "승현",
//     content: "안녕하시우",
//     emotion: 1,
//     createdAt: new Date().getTime()
//   },
//   {
//     id: 2,
//     author: "plla2",
//     content: "이건 두번재 일기",
//     emotion: 2,
//     createdAt: new Date().getTime()
//   },
//   {
//     id: 3,
//     author: "나야나",
//     content: "세번째 일기",
//     emotion: 3,
//     createdAt: new Date().getTime()
//   },
// ]
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const createdAt = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      createdAt,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data])
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
