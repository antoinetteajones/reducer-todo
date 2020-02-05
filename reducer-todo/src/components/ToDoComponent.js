import React from "react";

const TodoComponent = (props) => {
    const { id, toggleComplete, item, completed } = props;
    console.log(completed);
    return (
        <li onClick={() => toggleComplete(id)} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {item} {console.log(item)}
        </li>
    )
}

export default TodoComponent;