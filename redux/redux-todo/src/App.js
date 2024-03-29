import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';


function App() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <main>
      <Header title="Todo App" />
      <AddTodo />
      <Todos todos={todos} />
    </main>
  );
}

export default App;
