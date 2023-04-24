import React from 'react'
import Todo from '../Todo/Todo'

function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default Todos