import './App.css';
import DiaryList from './DiaryList';
import DiaryEditor from './compos/DiaryEditor';

function App() {
  const dummyList = [
    {
      id: 1,
      author: "정승현",
      content: "첫번째 일기",
      emotion: 1,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "plla2",
      content: "두번째 일기",
      emotion: 3,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "승현",
      content: "세번째 일기",
      emotion: 5,
      created_date: new Date().getTime(),
    },
  ]
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
