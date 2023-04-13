import { useRef, useState } from 'react';
import './App.css';
import DiaryList from './DiaryList';
import DiaryEditor from './compos/DiaryEditor';

function App() {
  // const dummyList = [
  //   {
  //     id: 1,
  //     author: "정승현",
  //     content: "첫번째 일기",
  //     emotion: 1,
  //     created_date: new Date().getTime(),
  //   },
  //   {
  //     id: 2,
  //     author: "plla2",
  //     content: "두번째 일기",
  //     emotion: 3,
  //     created_date: new Date().getTime(),
  //   },
  //   {
  //     id: 3,
  //     author: "승현",
  //     content: "세번째 일기",
  //     emotion: 5,
  //     created_date: new Date().getTime(),
  //   },
  // ]
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    // dataId.current의 초깃값은 0, 값을 한번쓰면 1씩 증가
    setData([newItem, ...data])
    // 원래배열에 있던 데이터를 스프레드 연산자로 쓰고, 새로운 데이터를 newItem으로 앞에 추가
  }
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;