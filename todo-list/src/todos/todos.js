import React from 'react';
import './todos.css';

const todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span >{todo.content}</span>
                    <span className='material-icons' onClick={() => {deleteTodo(todo.id)}}>delete</span>
                </div>
            )
        })
    ) : (
        <p className='center'> No Todo's </p>
    )
    return(
        <div className='todos collection'>
            {todoList}
        </div>
    );
}

export default todos;