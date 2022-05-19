import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
// import komponen Footer

const TodoList = (props) => {

  return (
    <div className="todo-list">
        <Header title={props.title} />
        <ul className="list-group list-group-flush">
            {props.items.map(item => (
                <TodoItem item={item} />
            ))}
        </ul>
        {/* Tambahkan komponent Footer dengan props count adalah panjang dari array todo items */}
    </div>
  )
}

export default TodoList