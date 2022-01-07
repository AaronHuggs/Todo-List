import React from "react";
import TodoItem from "./TodoItem";

const TodosList = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    handleCompleted={props.handleCompleted}
                    deleteTodo={props.deleteTodo}
                    setUpdate={props.setUpdate}
                />
            ))}
        </ul>
    )
    
}

export default TodosList;