import { createGlobalStyle } from 'styled-components';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}
`

function App() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default App;
