import React from 'react'
const TodoTask = (props) => {

    // Object destructure
    const { number, text, onTaskDelete } = props
    console.log("props", number)
    console.log("props", text)
    const onDelete = () => {
        onTaskDelete(text)
    }
    return (
        <div className='todo-input-container'>
            <p>{text}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default TodoTask;