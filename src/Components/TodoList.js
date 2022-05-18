import React from 'react'

const TodoList = () => {
    return (

        <div className="todo-list">
            <h1>{props.title.toUpperCase()}</h1>
            <Header title={props.title}/>
            <ul className="list-group list-group-flush">
                { props.items.map(item => (
                  <li key={item.id} className="list-group-item">{/* ... */}</li>
                  <TodoItem item={item}/>
                        ))
                }
            </ul>
        </div>
    )
}

export default TodoList