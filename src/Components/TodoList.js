import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
// import komponen Footer

const TodoList = (props) => {

  return (
    <div className="todo-list">
        <Header title={props.title} />
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        {/* Tambahkan komponent Footer dengan props count adalah panjang dari array todo items */}
    </div>
  )
}

export default TodoList