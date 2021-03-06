import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Navbar from "./Navbar";

const TodoContainer = () => {

    const [todos, setTodos] = useState(getInitialTodos())

    useEffect(() => {
        //Store todos in local storage
        const temp = JSON.stringify(todos);
        localStorage.setItem('todos',temp)
    }, [todos]) 


    function getInitialTodos() {
        //Get stored items
        const temp = localStorage.getItem('todos')
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }


    const handleCompleted = id => {
        setTodos(prevState =>
            prevState.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const deleteTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            })
        ])
    }


    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos(
            [...todos,newTodo]
        );
    };

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle;
                }
                return todo;
            })
        )
    }


    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='inner'>
                    <Header />  
                    <InputTodo addTodoProps={addTodoItem}/>
                    <TodosList 
                        todos={todos} 
                        handleCompleted={handleCompleted} 
                        deleteTodo={deleteTodo}
                        setUpdate={setUpdate}
                    />
                </div>
            </div>
        </>
        
    )
    
}
export default TodoContainer