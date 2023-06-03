import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("리액트 공부"), new Todo("타입스크립트 공부")];
  console.log(todos);
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
