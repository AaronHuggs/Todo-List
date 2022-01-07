import React, {useState, useEffect} from "react";
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa";

const TodoItem = props => {

    //editing defaults to false
    const [editing, setEditing] = useState(false);

    const handleEditing = () => {
        setEditing(true);
    }

    const handleEditingDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const {id, title, completed} = props.todo;

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = 'none';
        editMode.display = 'block';
    }
    else {
        viewMode.display = 'block';
        editMode.display = 'none';
    }

    useEffect(() => {
        return () => {
            console.log('Cleaning up...');
        }
    }, [])
    
    return(
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input 
                    type='checkbox' 
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleCompleted(id)}
                /> 
                {/*This is a comment in JSX*/}
                <button
                    onClick={() => props.deleteTodo(id)}
                >
                    <FaTrash 
                        style={{ color: "orangered", fontSize: "16px" }}
                    />
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
            </div>
            <input 
                type='text'
                className={styles.textInput}
                style={editMode}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleEditingDone}
            />
        </li>
    )
    
}

export default TodoItem;