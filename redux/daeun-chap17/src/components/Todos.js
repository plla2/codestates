import React from 'react'

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input type='checkbox' onClick={() => { onToggle(todo.id) }} checked={todo.done} readOnly={true} />
      <span>{todo.text}</span>
      <button onClick={() => { onRemove(todo.id) }}>삭제</button>
    </div>
  )
}
function Todos({ input, todos, onChangeInput, onRemove, onInsert, onToggle }) {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  }

  const onChange = e => onChangeInput(e.target.value)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />)}
    </div>
  )
}

export default Todos