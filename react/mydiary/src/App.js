import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json())
    // console.log(res)
    const initData = res.slice(0, 20).map((el) => {
      return {
        author: el.email,
        content: el.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData()
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
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
    setData((data) => [newItem, ...data])
    // 원래배열에 있던 데이터를 스프레드 연산자로 쓰고, 새로운 데이터를 newItem으로 앞에 추가
  }, []);

  const onRemove = (targetID) => {
    const newDiaryList = data.filter((el) => el.id !== targetID);
    setData(newDiaryList)
  }
  const onEdit = (targetID, newContent) => {
    setData(data.map((el) => el.id === targetID ? { ...el, content: newContent } : el))
  }

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작")
    let goodCount = data.filter((el) => el.emotion >= 3).length
    let badCount = data.length - goodCount
    let goodRatio = (goodCount / data.length) * 100
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기: {data.length} 개</div>
      <div>날씨 좋았던 날: {goodCount} 개</div>
      <div>날씨 안좋았던 날: {badCount} 개</div>
      <div>날씨 좋은날 비율: {goodRatio} %</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
