import React from "react";

class TodoItem extends React.Component {
    render() {
        return(
            <li>
                <input 
                    type='checkbox' 
                    checked={this.props.todo.completed}
                    onChange={() => this.props.handleCompleted(this.props.todo.id)}
                /> 
                {/*This is a comment in JSX*/}
                <button
                    onClick={() => this.props.deleteTodo(this.props.todo.id)}
                >
                    Delete
                </button>
                {this.props.todo.title}
            </li>
        )
    }
}

export default TodoItem;