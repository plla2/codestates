import { connect } from "react-redux"
import Todos from "../components/Todos"
import { changeInput, insert, remove, toggle } from '../modules/todos';

const TodoContainer = ({ input, todos, changeInput, insert, remove, toggle }) => {
  return <Todos
    input={input}
    todos={todos}
    onChangeInput={changeInput}
    onInsert={insert}
    onToggle={toggle}
    onRemove={remove} />
}

export default connect(({ todos }) => ({
  input: todos.input,
  todos: todos.todos
}), { changeInput, insert, remove, toggle })(TodoContainer)